/*	New Product Page
	================================================

	say: non-blocking message box.

	Mark Simon

	================================================ */

	'use strict';

	/*	Main Function
		================================================ */

		function say(message) {
			var div=document.createElement('div');
//			div.style.cssText='';
				document.body.appendChild(div);

			var title=document.createElement('p');
				title.innerHTML='The Message';
//				title.setAttribute
//				var heading=document.createElement('h3');
//					heading.innerHTML="The Message";
//				heading.style.cssText='';
//				title.appendChild(heading);

			var content=document.createElement('textarea');
//			content.style.cssText='';

			var handle=document.createElement('div');
				handle.setAttribute('id','handle');
//				handle.style.cssText='';

			var close=document.createElement('div');
				close.setAttribute('id','close');
				close.onclick=function() {
					div.style.display='none';
				};


			document.body.appendChild(div);

			div.appendChild(title);
			div.appendChild(content);
			div.appendChild(close);
			div.appendChild(handle);
			div.setAttribute('id','message');

			draggable(div);
				stretchable(div,handle);

//			content.style.width=div.offsetWidth-2+'px';
//			content.style.height=div.offsetHeight-title.offsetHeight-2+'px';

			say=function(message) {
				div.style.display='block';
				if(message===undefined) content.textContent='';
				else content.textContent+=message+'\n';
				//	log

				log(message);
			};
			say(message);
		}

		function log(message) {
			var ajax = new XMLHttpRequest();
			ajax.onreadystatechange = doit;
			var url='/catalogue/say.php?message='+message;
			try {
				ajax.open('get', url, true);
				ajax.send(null);
			}
			catch(e) {
			}
			function doit() {

			}
		}

	/*	Draggable
		================================================ */

		function stretchable(element,handle) {
			element.style.position='fixed';
			activateDrag();

			function activateDrag() {
				var left,top;
				if(handle) handle.onmousedown=startDrag;
				else element.onmousedown=startDrag;
				if(left=localStorage.getItem('left'))
					element.style.left=left + 'px';
				if(top=localStorage.getItem('top'))
					element.style.top=top + 'px';
			}

			function startDrag(e) {
				var event=e||window.event;
				var target=e.target||e.srcElement;
				var left, top, startX, startY, startW, startH;
//				if(target!=handle) return;
				//	Element & Mouse Position
					left=element.offsetLeft;					//	Element Position
					top =element.offsetTop;
					element.style.left=left+'px';
					element.style.top=top+'px';
					startX=event.clientX;
				//	Mouse Position
					startY=event.clientY;
				//	Dimensions
					startW=element.clientWidth;
					startH=element.clientHeight;

				//	Enable Drag & Drop Events
					document.onmousemove=drag;
					document.onmouseup=release;
					event.stopPropagation();
				return false;

				function drag(e) {
					var event=e||window.event;
//					var position={"left":left+event.clientX-startX,"top":top+event.clientY-startY};
					var newWidth=startW+event.clientX-startX;
					var newHeight=startH+event.clientY-startY;
						element.style.width=newWidth+'px';
						element.style.height=newHeight+'px';
//					sessionStorage.setItem('left',position.left);
//					sessionStorage.setItem('top',position.top);
					return false;
				}
				function release(e) {
					document.onmousemove=null;
					document.onmouseup=null;
				}
			}
		}

	/*	Stretchable
		================================================ */
		function draggable(element,handle) {
			element.style.position='fixed';
			activateDrag();
			function activateDrag() {
				var left,top;
				if(handle) handle.onmousedown=startDrag;
				else element.onmousedown=startDrag;
				if(left=localStorage.getItem('left'))
					element.style.left=left + 'px';
				if(top=localStorage.getItem('top'))
					element.style.top=top + 'px';
			}
			function startDrag(e) {
				var event=e||window.event;
//				var target=e.target||e.srcElement;
				var left, top, startX, startY;
//				if(target!=handle) return;
				//	Element & Mouse Position
					left=element.offsetLeft;					//	Element Position
					top =element.offsetTop;
					startX=event.clientX;
				//	Mouse Position
					startY=event.clientY;

				//	Enable Drag & Drop Events
					document.onmousemove=drag;
					document.onmouseup=release;

				//	Change Appearance
					element.style.cursor='move';
					element.style.opacity='.60';
					element.style.filter='alpha(opacity=60)';
				return false;

				function drag(e) {
					var event=e||window.event;
					var position={"left":left+event.clientX-startX,"top":top+event.clientY-startY};
					element.style.left=position.left + 'px';
					element.style.top =position.top + 'px';
					sessionStorage.setItem('left',position.left);
					sessionStorage.setItem('top',position.top);
					return false;
				}
				function release(e) {
					document.onmousemove=null;
					document.onmouseup=null;
					element.style.opacity=element.style.filter=null;
					element.style.cursor=null;
				}
			}
		}
