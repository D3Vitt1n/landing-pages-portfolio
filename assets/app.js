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
