const currency=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});const bill=document.querySelector('#bill');const rate=document.querySelector('#rate');if(bill&&rate){const update=()=>{document.querySelector('#bill-value').textContent=currency.format(Number(bill.value))+' / mês';document.querySelector('#saving').textContent=currency.format(Number(bill.value)*Number(rate.value));};bill.addEventListener('input',update);rate.addEventListener('change',update);update();}const action=document.querySelector('#demo-action');if(action){action.addEventListener('click',()=>{const selected=document.querySelector('#interest').value;const result=document.querySelector('#demo-result');result.hidden=false;result.textContent='Interesse selecionado: '+selected+'. Em uma página real, o próximo passo seria conversar com a equipe pelo canal de atendimento. Esta demonstração não envia mensagens nem realiza agendamentos.';});}
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const motionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('motion-visible');
        motionObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.demo section').forEach(section => motionObserver.observe(section));
}

const breathingToggle = document.querySelector('#breathing-toggle');
const breathingArt = document.querySelector('.breathing-art');
const breathingLabel = document.querySelector('#breathing-label');
if (breathingToggle && breathingArt && breathingLabel) {
  let breathingTimer;
  let expanded = false;
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  function stopBreathing() {
    clearInterval(breathingTimer);
    breathingArt.classList.remove('is-breathing');
    breathingToggle.setAttribute('aria-pressed', 'false');
    breathingToggle.textContent = 'Experimentar o movimento ↗';
    breathingLabel.textContent = 'No seu tempo.';
  }
  breathingToggle.addEventListener('click', () => {
    if (breathingToggle.getAttribute('aria-pressed') === 'true') { stopBreathing(); return; }
    if (motionPreference.matches) {
      breathingLabel.textContent = 'Movimento reduzido ativado.';
      return;
    }
    breathingArt.classList.add('is-breathing');
    breathingToggle.setAttribute('aria-pressed', 'true');
    breathingToggle.textContent = 'Pausar o movimento';
    expanded = false;
    breathingLabel.textContent = 'Deixe o ritmo acontecer.';
    breathingTimer = setInterval(() => {
      expanded = !expanded;
      breathingLabel.textContent = expanded ? 'Um momento para você.' : 'Deixe o ritmo acontecer.';
    }, 4000);
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopBreathing(); });
  motionPreference.addEventListener('change', stopBreathing);
}
