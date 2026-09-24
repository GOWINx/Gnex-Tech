(function(){
  var toggle=document.querySelector('.menu-toggle');
  var links=document.querySelector('.nav-links');
  if(toggle&&links) toggle.addEventListener('click',function(){links.classList.toggle('open');toggle.setAttribute('aria-expanded',links.classList.contains('open'));});
  var dots=document.querySelectorAll('.demo-dot');
  var title=document.getElementById('demoTitle');
  var copy=document.getElementById('demoCopy');
  var feedback=document.getElementById('demoFeedback');
  var data={d1:{title:'Unlabelled USB drive',copy:'A device has been left beside a shared workstation. What should a team member do?',answer:'Report it to IT and leave it unplugged.'},d2:{title:'Urgent access request',copy:'An email asks for a password reset before the next shipment leaves. What is the safer response?',answer:'Verify the request through a trusted channel.'},d3:{title:'Unescorted visitor',copy:'A visitor is near the loading dock without a visible badge. What should happen next?',answer:'Pause access and contact the site lead.'}};
  dots.forEach(function(dot){dot.addEventListener('click',function(){dots.forEach(function(item){item.classList.remove('selected')});dot.classList.add('selected');var item=data[dot.dataset.id];if(title)title.textContent=item.title;if(copy)copy.textContent=item.copy;if(feedback)feedback.textContent='Choose the response that protects the operation.';});});
  document.querySelectorAll('.choice').forEach(function(button){button.addEventListener('click',function(){if(feedback)feedback.textContent=button.dataset.correct==='true'?'Correct. '+(data[document.querySelector('.demo-dot.selected')?.dataset.id||'d1'].answer):'That choice increases risk. Look for the option that verifies, reports, or pauses the action.';});});
  var form=document.getElementById('contactForm');
  if(form) form.addEventListener('submit',function(event){event.preventDefault();var name=form.querySelector('[name=name]').value.trim();var email=form.querySelector('[name=email]').value.trim();var message=form.querySelector('[name=message]').value.trim();var status=document.getElementById('cf-status');if(!name||!email||!message){status.textContent='Please complete your name, work email and message.';status.style.color='#b3261e';return}var company=form.querySelector('[name=company]');var team=form.querySelector('[name=team]');var subject=encodeURIComponent('CyberGuard 360 enquiry from '+name);var body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nCompany: '+(company?company.value:'')+'\nTeam size: '+(team?team.value:'')+'\n\n'+message);status.innerHTML='Your email app is ready. Send the pre-filled message to <a href="mailto:hello@gnextech.io?subject='+subject+'&body='+body+'">hello@gnextech.io</a>.';status.style.color='#08733b';});
})();
