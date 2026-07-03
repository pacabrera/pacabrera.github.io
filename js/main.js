  document.getElementById('year').textContent = new Date().getFullYear();

    const btnCode = document.getElementById('btn-code');
    const btnPlatform = document.getElementById('btn-platform');
    const viewCode = document.getElementById('view-code');
    const viewPlatform = document.getElementById('view-platform');
    const panelLabel = document.getElementById('panel-label');
    const panelMode = document.getElementById('panel-mode');
    const eyebrow = document.getElementById('eyebrow');
    const cardCode = document.getElementById('card-code');
    const cardPlatform = document.getElementById('card-platform');
    const root = document.documentElement;

    function setMode(mode) {
      const isCode = mode === 'code';
      btnCode.setAttribute('aria-pressed', String(isCode));
      btnPlatform.setAttribute('aria-pressed', String(!isCode));

      viewCode.classList.toggle('active', isCode);
      viewPlatform.classList.toggle('active', !isCode);

      panelLabel.textContent = isCode ? 'component.tsx' : 'site-builder.canvas';
      panelMode.textContent = isCode ? 'code' : 'no-code';
      eyebrow.textContent = isCode ? '// front-end developer' : '// web builder';

      root.style.setProperty('--accent', isCode ? 'var(--accent-code)' : 'var(--accent-platform)');

      cardCode.classList.toggle('focus', isCode);
      cardPlatform.classList.toggle('focus', !isCode);
    }

    btnCode.addEventListener('click', () => setMode('code'));
    btnPlatform.addEventListener('click', () => setMode('platform'));