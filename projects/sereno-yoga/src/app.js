const delay = ms => new Promise(res => setTimeout(res, ms));

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('content.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    populateContent(data.components);
    setupInteractions();
  } catch (error) {
    // Silent fail in production
  }
});

function populateContent(components) {
  for (const [compName, compData] of Object.entries(components)) {
    const section = document.getElementById(compName);
    if (!section) continue;

    for (const [stateName, stateData] of Object.entries(compData)) {
      if (stateData._not_applicable) continue;

      const stateContainer = section.querySelector(`.state-${stateName}`);
      if (!stateContainer) continue;

      for (const [key, text] of Object.entries(stateData)) {
        if (key === '_not_applicable') continue;
        
        if (['heading', 'body', 'cta', 'label', 'toast', 'emailDisclaimer', 'privacyLink', 'text', 'accept', 'reject'].includes(key)) {
          const el = stateContainer.querySelector(`.${key}`);
          if (el) {
            el.textContent = text;
          } else {
            // Missing HTML element, leave a TODO comment
            stateContainer.innerHTML += `<!-- TODO:WRITER ${compName}.${stateName}.${key} -->`;
          }
        }
      }
    }
  }
}

function setupInteractions() {
  const locSection = document.getElementById('LocationFinder');
  const btnFindLoc = document.getElementById('btn-find-location');
  const btnRetryLoc = document.getElementById('btn-retry-location');
  
  if (btnFindLoc) {
    btnFindLoc.addEventListener('click', async () => {
      await simulateStateChange(locSection, 'loading', 'success');
    });
  }
  if (btnRetryLoc) {
    btnRetryLoc.addEventListener('click', async () => {
      await simulateStateChange(locSection, 'loading', 'idle');
    });
  }

  const schSection = document.getElementById('ClassSchedule');
  const btnBook = document.getElementById('btn-book-class');
  const btnRetrySch = document.getElementById('btn-retry-schedule');

  if (btnBook) {
    btnBook.addEventListener('click', () => {
      document.getElementById('BookingForm').scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (btnRetrySch) {
     btnRetrySch.addEventListener('click', async () => {
       await simulateStateChange(schSection, 'loading', 'idle');
     });
  }

  const bookSection = document.getElementById('BookingForm');
  const formBooking = document.getElementById('form-booking');
  const btnRetryBooking = document.getElementById('btn-retry-booking');

  if (formBooking) {
    formBooking.addEventListener('submit', async (e) => {
      e.preventDefault();
      await simulateStateChange(bookSection, 'loading', 'success');
    });
  }
  if (btnRetryBooking) {
     btnRetryBooking.addEventListener('click', async () => {
       await simulateStateChange(bookSection, 'idle', 'idle');
     });
  }

  setupPrivacy();
}

function setupPrivacy() {
  const banner = document.getElementById('CookieBanner');
  const btnAccept = document.getElementById('btn-accept-cookies');
  const btnReject = document.getElementById('btn-reject-cookies');

  // Respect DNT / GPC Test 12
  const dnt = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1";
  const gpc = navigator.globalPrivacyControl === true;
  
  if (dnt || gpc) {
    // If privacy signals are active, assume rejection of non-essential tracking
    localStorage.setItem('cookie-consent', 'rejected');
    return;
  }

  if (!localStorage.getItem('cookie-consent')) {
    banner.classList.remove('hidden');
  }

  if (btnAccept) {
    btnAccept.addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'accepted');
      banner.classList.add('hidden');
    });
  }

  if (btnReject) {
    btnReject.addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'rejected');
      banner.classList.add('hidden');
    });
  }
}

async function simulateStateChange(element, tempState, finalState) {
  element.setAttribute('data-state', tempState);
  await delay(1500);
  element.setAttribute('data-state', finalState);
}

