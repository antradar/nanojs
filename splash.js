/*
Very Simple Splash Banners
(c) Schien Dong, Antradar Software Inc.

License: www.antradar.com/license.php
Documentation: www.antradar.com/docs-splash-js
*/

function gid(d){return document.getElementById(d);}

function animsplash(id,a,b){
	var seqa=[100,80,60,40,20,10,0];
	var seqb=[0,10,20,40,60,80,100];
	
	
	var splash=gid(id);
	if (splash.anim==1) gid(id+b).style.display='block';

	gid(id+a).style.opacity=seqa[splash.anim]/100;
	gid(id+b).style.opacity=seqb[splash.anim]/100;
	gid(id+a).style.filter='alpha(opacity='+seqa[splash.anim]+')';
	gid(id+b).style.filter='alpha(opacity='+seqb[splash.anim]+')';
		
	if (splash.anim<seqa.length-1) setTimeout(function(){animsplash(id,a,b);},50);
	else {
		splash.anim=0;
		gid(id+a).style.display='none';
	}	
	splash.anim++;
}

function showsplash(id,n){
	var splash=gid(id);
	var sc=n;
	
	if (splash.idx==null) {
		splash.idx=0; 
		splash.anim=0;
	} else splash.idx=(splash.idx+1)%sc;
	
	animsplash(id,splash.idx,(splash.idx+1)%sc);
}

function startsplash(id,n,interval){
	setInterval(function(){showsplash(id,n);},interval);	
}
