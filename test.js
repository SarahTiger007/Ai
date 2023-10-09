// gsap.registerPlugin(ScrollTrigger);
// let speed = 100;

// /*  SCENE 1 */
// let scene1 = gsap.timeline();
// ScrollTrigger.create({
//   animation: scene1,
//   trigger: ".scrollElement",
//   start: "top top",
//   end: "45% 100%",
//   scrub: 3,
// });

// // hills animation
// scene1.to(
//   "#h1-1",
//   { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" },
//   0
// );
// scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
// scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
// scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
// scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
// scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
// scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
// scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
// scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

// //animate text
// scene1.to("#info", { y: 8 * speed }, 0);

// /*   Bird   */
// gsap.fromTo(
//   "#bird",
//   { opacity: 1 },
//   {
//     y: -250,
//     x: 800,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".scrollElement",
//       start: "15% top",
//       end: "60% 100%",
//       scrub: 4,
//       onEnter: function () {
//         gsap.to("#bird", { scaleX: 1, rotation: 0 });
//       },
//       onLeave: function () {
//         gsap.to("#bird", { scaleX: -1, rotation: -15 });
//       },
//     },
//   }
// );

// /* Clouds  */
// let clouds = gsap.timeline();
// ScrollTrigger.create({
//   animation: clouds,
//   trigger: ".scrollElement",
//   start: "top top",
//   end: "70% 100%",
//   scrub: 1,
// });

// clouds.to("#cloud1", { x: 500 }, 0);
// clouds.to("#cloud2", { x: 1000 }, 0);
// clouds.to("#cloud3", { x: -1000 }, 0);
// clouds.to("#cloud4", { x: -700, y: 25 }, 0);

// /* Sun motion Animation  */
// let sun = gsap.timeline();
// ScrollTrigger.create({
//   animation: sun,
//   trigger: ".scrollElement",
//   start: "top top",
//   end: "2200 100%",
//   scrub: 1,
// });

// //sun motion
// sun.to("#bg_grad", { attr: { cy: "330" } }, 0.0);

// //bg change
// sun.to("#sun", { attr: { offset: "0.15" } }, 0.0);
// sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.0);
// sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.0);
// sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.0);
// sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.0);
// sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

// /*   SCENE 2  */
// let scene2 = gsap.timeline();
// ScrollTrigger.create({
//   animation: scene2,
//   trigger: ".scrollElement",
//   start: "15% top",
//   end: "40% 100%",
//   scrub: 4,
// });

// scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
// scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
// scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
// scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
// scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
// scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

// /* Bats */
// gsap.fromTo(
//   "#bats",
//   { opacity: 1, y: 400, scale: 0 },
//   {
//     y: 120,
//     scale: 0.8,
//     transformOrigin: "50% 50%",
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: ".scrollElement",
//       start: "40% top",
//       end: "70% 100%",
//       scrub: 3,
//       onEnter: function () {
//         gsap.utils.toArray("#bats path").forEach((item, i) => {
//           gsap.to(item, {
//             scaleX: 0.5,
//             yoyo: true,
//             repeat: 11,
//             duration: 0.15,
//             delay: 0.7 + i / 10,
//             transformOrigin: "50% 50%",
//           });
//         });
//         gsap.set("#bats", { opacity: 1 });
//       },
//       onLeave: function () {
//         gsap.to("#bats", { opacity: 0, delay: 2 });
//       },
//     },
//   }
// );

// /* Sun increase */
// let sun2 = gsap.timeline();
// ScrollTrigger.create({
//   animation: sun2,
//   trigger: ".scrollElement",
//   start: "2200 top",
//   end: "5000 100%",
//   scrub: 1,
// });

// sun2.to("#sun", { attr: { offset: "0.6" } }, 0);
// sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
// sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
// sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
// sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
// sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

// /* Transition (from Scene2 to Scene3) */
// gsap.set("#scene3", { y: 580, visibility: "visible" });
// let sceneTransition = gsap.timeline();
// ScrollTrigger.create({
//   animation: sceneTransition,
//   trigger: ".scrollElement",
//   start: "70% top",
//   end: "bottom 100%",
//   scrub: 3,
// });

// sceneTransition.to(
//   "#h2-1",
//   { y: -680, scale: 1.5, transformOrigin: "50% 50%" },
//   0
// );
// sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
// sceneTransition.to("#bg2", { y: 0 }, 0);

// /* Scene 3 */
// let scene3 = gsap.timeline();
// ScrollTrigger.create({
//   animation: scene3,
//   trigger: ".scrollElement",
//   start: "80% 50%",
//   end: "bottom 100%",
//   scrub: 3,
// });

// //Hills motion
// scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
// scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
// scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
// scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
// scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

// //stars
// scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

// // Scroll Back text
// scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
// scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);

// //gradient value change
// scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
// scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

// /*   falling star   */
// gsap.to("#fstar", {
//   x: -700,
//   y: -250,
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: ".scrollElement",
//     start: "4000 top",
//     end: "6000 100%",
//     scrub: 5,
//     onEnter: function () {
//       gsap.set("#fstar", { opacity: 1 });
//     },
//     onLeave: function () {
//       gsap.set("#fstar", { opacity: 0 });
//     },
//   },
// });

// //reset scrollbar position after refresh
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

// let fullscreen;
// let fsEnter = document.getElementById("fullscr");
// fsEnter.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (!fullscreen) {
//     fullscreen = true;
//     document.documentElement.requestFullscreen();
//     fsEnter.innerHTML = "Exit Fullscreen";
//   } else {
//     fullscreen = false;
//     document.exitFullscreen();
//     fsEnter.innerHTML = "Go Fullscreen";
//   }
// });
// let webgl = {};
// let tail = {};

// (function initThree() {
//   webgl.container = document.getElementById("canvas_container");

//   webgl.scene = new THREE.Scene();

//   webgl.camera = new THREE.PerspectiveCamera(
//     50,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     10000
//   );
//   webgl.camera.position.z = 180;

//   webgl.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//   webgl.renderer.setSize(
//     webgl.container.clientWidth,
//     webgl.container.clientHeight
//   );
//   webgl.renderer.setPixelRatio(window.devicePixelRatio);
//   webgl.container.appendChild(webgl.renderer.domElement);

//   webgl.clock = new THREE.Clock(true);

//   webgl.phase = "wall";

//   webgl.loader = new THREE.TextureLoader();
//   webgl.texture = webgl.loader.load("https://i.imgur.com/ZrnWXzF.png", setup);
// })();

// function setup() {
//   pixelExtraction();

//   if (webgl.phase == "video") webgl.threshold = -1;
//   initParticles();

//   initTail();
//   initRaycaster();

//   window.addEventListener("resize", () => {
//     clearTimeout(webgl.timeout_Debounce);
//     webgl.timeout_Debounce = setTimeout(resize, 50);
//   });
//   resize();

//   webgl.scene.add(webgl.particlesMesh); // !

//   if (webgl.phase == "wall") {
//     callTOaction();
//     document
//       .getElementById("wrapper")
//       .addEventListener("click", brakeWall, false);
//     startWallAnimation();
//   } else startVideoParticles();

//   animate();
// }

// function pixelExtraction() {
//   webgl.texture.minFilter = THREE.LinearFilter;
//   webgl.texture.magFilter = THREE.LinearFilter;
//   webgl.texture.format = THREE.RGBFormat;

//   webgl.width = webgl.texture.image.width;
//   webgl.height = webgl.texture.image.height;

//   webgl.totalPoints = webgl.width * webgl.height;

//   if (webgl.phase == "video") {
//     webgl.visiblePoints = webgl.totalPoints;
//     //console.log('pixelExtraction: visiblePoints', webgl.visiblePoints, webgl.totalPoints);
//     return;
//   }

//   webgl.visiblePoints = 0;
//   webgl.threshold = 60;

//   const img = webgl.texture.image;
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");
//   canvas.width = webgl.width;
//   canvas.height = webgl.height;
//   ctx.scale(1, -1);
//   ctx.drawImage(img, 0, 0, webgl.width, webgl.height * -1);
//   const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   webgl.arrayOfColors = Float32Array.from(imgData.data);

//   for (let i = 0; i < webgl.totalPoints; i++) {
//     if (webgl.arrayOfColors[i * 4 + 0] > webgl.threshold) webgl.visiblePoints++;
//   }

//   //console.log('pixelExtraction: visiblePoints', webgl.visiblePoints, webgl.totalPoints);
// }

// function initParticles() {
//   const geometryParticles = new THREE.InstancedBufferGeometry();

//   const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
//   positions.setXYZ(0, -0.5, 0.5, 0.0);
//   positions.setXYZ(1, 0.5, 0.5, 0.0);
//   positions.setXYZ(2, -0.5, -0.5, 0.0);
//   positions.setXYZ(3, 0.5, -0.5, 0.0);
//   geometryParticles.setAttribute("position", positions);

//   const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
//   uvs.setXYZ(0, 0.0, 0.0);
//   uvs.setXYZ(1, 1.0, 0.0);
//   uvs.setXYZ(2, 0.0, 1.0);
//   uvs.setXYZ(3, 1.0, 1.0);
//   geometryParticles.setAttribute("uv", uvs);

//   geometryParticles.setIndex(
//     new THREE.BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1)
//   );

//   const offsets = new Float32Array(webgl.visiblePoints * 3);
//   const indices = new Uint16Array(webgl.visiblePoints);
//   const angles = new Float32Array(webgl.visiblePoints);

//   for (let i = 0, j = 0; i < webgl.totalPoints; i++) {
//     if (webgl.arrayOfColors[i * 4 + 0] <= webgl.threshold) continue;

//     offsets[j * 3 + 0] = i % webgl.width;
//     offsets[j * 3 + 1] = Math.floor(i / webgl.width);

//     indices[j] = i;
//     angles[j] = Math.random() * Math.PI;

//     j++;
//   }

//   geometryParticles.setAttribute(
//     "offset",
//     new THREE.InstancedBufferAttribute(offsets, 3, false)
//   );
//   geometryParticles.setAttribute(
//     "angle",
//     new THREE.InstancedBufferAttribute(angles, 1, false)
//   );
//   geometryParticles.setAttribute(
//     "pindex",
//     new THREE.InstancedBufferAttribute(indices, 1, false)
//   );

//   const uniforms = {
//     uTime: { value: 0 },
//     uRandom: { value: 2.0 },
//     uDepth: { value: 40.0 },
//     uSize: { value: 2.0 },
//     uTextureSize: { value: new THREE.Vector2(webgl.width, webgl.height) },
//     uTexture: { value: webgl.texture },
//     uTouch: { value: null },
//     uAlphaCircle: { value: 0.0 },
//     uAlphaSquare: { value: 1.0 },
//     uCircleORsquare: { value: 0.0 },
//   };

//   const materialParticles = new THREE.RawShaderMaterial({
//     uniforms: uniforms,
//     vertexShader: vertexShader(),
//     fragmentShader: fragmentShader(),
//     depthTest: false,
//     transparent: true,
//     //side: THREE.DoubleSide,
//     //toneMapped: false,
//     //blending: THREE.AdditiveBlending
//   });
//   webgl.particlesMesh = new THREE.Mesh(geometryParticles, materialParticles);
// }

// function initTail() {
//   tail.array = [];
//   tail.size = 80;
//   tail.maxAge = 120;
//   tail.radius = 0.1;
//   tail.red = 255;

//   tail.canvas = document.createElement("canvas");
//   tail.canvas.width = tail.canvas.height = tail.size;
//   tail.ctx = tail.canvas.getContext("2d");
//   tail.ctx.fillStyle = "black";
//   tail.ctx.fillRect(0, 0, tail.canvas.width, tail.canvas.height);

//   tail.texture = new THREE.Texture(tail.canvas);
//   webgl.particlesMesh.material.uniforms.uTouch.value = tail.texture;
// }

// function initRaycaster() {
//   const geometryPlate = new THREE.PlaneGeometry(
//     webgl.width,
//     webgl.height,
//     1,
//     1
//   );
//   const materialPlate = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     wireframe: true,
//     depthTest: false,
//   });
//   materialPlate.visible = false;
//   webgl.hoverPlate = new THREE.Mesh(geometryPlate, materialPlate);
//   webgl.scene.add(webgl.hoverPlate);

//   webgl.raycaster = new THREE.Raycaster();
//   webgl.mouse = new THREE.Vector2(0, 0);

//   window.addEventListener("mousemove", onMouseMove, false);
// }

// function onMouseMove(event) {
//   webgl.mouse.x =
//     (event.clientX / webgl.renderer.domElement.clientWidth) * 2 - 1;
//   webgl.mouse.y =
//     -(event.clientY / webgl.renderer.domElement.clientHeight) * 2 + 1;

//   webgl.raycaster.setFromCamera(webgl.mouse, webgl.camera);
//   let intersects = webgl.raycaster.intersectObjects([webgl.hoverPlate]);

//   if (webgl.phase == "video") {
//     webgl.particlesMesh.rotation.y = webgl.mouse.x / 8;
//     webgl.particlesMesh.rotation.x = -webgl.mouse.y / 8;
//   }

//   if (intersects[0]) buildTail(intersects[0].uv);
// }

// function buildTail(uv) {
//   let force = 0;
//   const last = tail.array[tail.array.length - 1];
//   if (last) {
//     const dx = last.x - uv.x;
//     const dy = last.y - uv.y;
//     const dd = dx * dx + dy * dy;
//     force = Math.min(dd * 10000, 1);
//   }
//   tail.array.push({ x: uv.x, y: uv.y, age: 0, force });
// }

// function callTOaction() {
//   timeout = window.setTimeout(() => {
//     if (webgl.phase == "wall") {
//       gsap.to(document.querySelector(".text"), 1.5, {
//         css: { top: 0 },
//         ease: "power4.out",
//       });
//     } else return;
//   }, 6000);
// }

// function brakeWall(e) {
//   if (e.target.classList.contains("btn")) return;
//   document
//     .getElementById("wrapper")
//     .removeEventListener("click", brakeWall, false);
//   webgl.tl.play();
// }

// function startWallAnimation() {
//   tl = gsap.timeline({ paused: true });
//   tl.to(
//     document.querySelector(".text"),
//     1,
//     { css: { top: -80 }, ease: "power4.out" },
//     0
//   );
//   tl.to(
//     webgl.particlesMesh.material.uniforms.uRandom,
//     2,
//     { value: -20.0, ease: "power4.out" },
//     0
//   );
//   tl.fromTo(
//     webgl.particlesMesh.material.uniforms.uSize,
//     2,
//     { value: 2.0 },
//     { value: 2, ease: "power4.out" },
//     0
//   );
//   tl.fromTo(
//     webgl.particlesMesh.material.uniforms.uDepth,
//     2,
//     { value: 4.0 },
//     { value: 160.0, ease: "power4.out" },
//     0
//   );
//   tl.fromTo(
//     webgl.particlesMesh.material.uniforms.uSize,
//     2,
//     { value: 2.0 },
//     { value: 0.3, ease: "power4.out" }
//   );
//   tl.to(webgl.particlesMesh.material.uniforms.uDepth, 1.5, { value: 4.0 }, 2);
//   tl.to(webgl.particlesMesh.position, 2, { z: 190.0, ease: "power3.in" }, 1.5);
//   tl.call(initVideoParticles, null, "<0.5");
//   tl.to(document.querySelector("#bg"), 3, { css: { autoAlpha: 0 } }, "<0.5");
//   tl.call(
//     function () {
//       webgl.scene.children[0].geometry.dispose();
//       webgl.scene.children[0].material.dispose();
//       webgl.scene.remove(webgl.scene.children[0]);
//     },
//     null,
//     3.5
//   );
//   webgl.tl = tl;
// }

// function initVideoParticles() {
//   cancelAnimationFrame(webgl.raf);
//   webgl.video = document.getElementById("video");
//   webgl.texture = new THREE.VideoTexture(webgl.video);
//   webgl.phase = "video";

//   setup();
// }

// function startVideoParticles() {
//   webgl.video.play();
//   if (timeout) clearTimeout(timeout);
//   tl2 = gsap.timeline();
//   tl2.to(
//     document.querySelector(".text"),
//     1,
//     { css: { top: -80 }, ease: "power4.out" },
//     0
//   );
//   tl2.fromTo(
//     webgl.particlesMesh.material.uniforms.uSize,
//     3,
//     { value: 0.0 },
//     { value: 1.5 },
//     0
//   );
//   tl2.to(webgl.particlesMesh.material.uniforms.uRandom, 3, { value: 2.0 }, 0);
//   tl2.fromTo(
//     webgl.particlesMesh.material.uniforms.uDepth,
//     7,
//     { value: 180.0 },
//     { value: 12.0 },
//     0
//   );
//   tl2.fromTo(
//     webgl.particlesMesh.material.uniforms.uAlphaCircle,
//     3,
//     { value: 1.0 },
//     { value: 0.0 },
//     0
//   );
//   tl2.fromTo(
//     webgl.particlesMesh.material.uniforms.uSize,
//     4,
//     { value: 1.5 },
//     { value: 6, yoyo: true, repeat: 1 }
//   );
//   tl2.set(webgl.particlesMesh.material.uniforms.uCircleORsquare, {
//     value: 1.0,
//   });
//   tl2.to(webgl.particlesMesh.material.uniforms.uDepth, 5, {
//     value: 160.0,
//     ease: "elastic.out(1, 0.3)",
//   });
//   tl2.fromTo(
//     webgl.particlesMesh.material.uniforms.uDepth,
//     5,
//     { value: 160.0 },
//     { value: 12.0, ease: "elastic.out(1, 0.3)" }
//   );

//   window.addEventListener(
//     "click",
//     function (e) {
//       if (e.target.classList.contains("btn")) return;
//       tl2.seek(0.5);
//     },
//     false
//   );
// }

// function animate() {
//   webgl.particlesMesh.material.uniforms.uTime.value += webgl.clock.getDelta();

//   drawTail();
//   tail.texture.needsUpdate = true;
//   webgl.texture.needsUpdate = true;

//   webgl.renderer.render(webgl.scene, webgl.camera);
//   webgl.raf = requestAnimationFrame(animate);
// }

// function drawTail() {
//   tail.ctx.fillStyle = "black";
//   tail.ctx.fillRect(0, 0, tail.canvas.width, tail.canvas.height);

//   tail.array.forEach((point, i) => {
//     point.age++;
//     if (point.age > tail.maxAge) {
//       tail.array.splice(i, 1);
//     } else {
//       const pos = {
//         x: point.x * tail.size,
//         y: (1 - point.y) * tail.size,
//       };

//       let intensity = 1;
//       if (point.age < tail.maxAge * 0.3) {
//         intensity = easeOutSine(point.age / (tail.maxAge * 0.3), 0, 1, 1);
//       } else {
//         intensity = easeOutSine(
//           1 - (point.age - tail.maxAge * 0.3) / (tail.maxAge * 0.7),
//           0,
//           1,
//           1
//         );
//       }

//       intensity *= point.force;
//       const radius = tail.size * tail.radius * intensity;
//       const grd = tail.ctx.createRadialGradient(
//         pos.x,
//         pos.y,
//         radius * 0.25,
//         pos.x,
//         pos.y,
//         radius
//       );
//       grd.addColorStop(0, "rgba(" + tail.red + ", 255, 255, 0.2)");
//       grd.addColorStop(1, "rgba(0, 0, 0, 0.0)");

//       tail.ctx.beginPath();
//       tail.ctx.fillStyle = grd;
//       tail.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
//       tail.ctx.fill();
//     }
//   });
// }

// const easeOutSine = (t, b, c, d) => {
//   return c * Math.sin((t / d) * (Math.PI / 2)) + b;
// };

// function resize() {
//   let f = 0.3;

//   webgl.camera.aspect =
//     webgl.container.clientWidth / webgl.container.clientHeight;
//   webgl.camera.updateProjectionMatrix();
//   webgl.renderer.setSize(
//     webgl.container.clientWidth,
//     webgl.container.clientHeight
//   );

//   if (window.innerWidth / window.innerHeight < 2.8) f = -0.2;

//   const fovHeight =
//     2 *
//     Math.tan((webgl.camera.fov * Math.PI) / 180 / 2) *
//     webgl.camera.position.z;
//   const scale = fovHeight / webgl.height + f;
//   webgl.particlesMesh.scale.set(scale, scale, 1);
//   if (webgl.hoverPlate) webgl.hoverPlate.scale.set(scale, scale, 1);
// }

// let fsEnter = document.getElementById("fullscr");
// fsEnter.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (!webgl.fullscreen) {
//     webgl.fullscreen = true;
//     document.documentElement.requestFullscreen();
//     resize();
//     fsEnter.innerHTML = "Exit Fullscreen";
//   } else {
//     webgl.fullscreen = false;
//     document.exitFullscreen();
//     fsEnter.innerHTML = "Go Fullscreen";
//   }
// });

function vertexShader() {
  return `
        precision highp float;
        
        attribute float pindex;
        attribute vec3 position;
        attribute vec3 offset;
        attribute vec2 uv;
        attribute float angle;
        
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        
        uniform float uTime;
        uniform float uRandom;
        uniform float uDepth;
        uniform float uSize;
        uniform vec2 uTextureSize;
        uniform sampler2D uTexture;
        uniform sampler2D uTouch;
        
        varying vec2 vPUv;
        varying vec2 vUv;
        
        
            
        // Description : Array and textureless GLSL 2D simplex noise function.
        // Author : Ian McEwan, Ashima Arts.
        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec2 mod289(vec2 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
        
        vec3 permute(vec3 x) {
            return mod289(((x*34.0)+1.0)*x);
        }
        
        float snoise(vec2 v)
            {
            const vec4 C = vec4(0.211324865405187, 
                                0.366025403784439, 
                            -0.577350269189626,  
                                0.024390243902439); 
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
        
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
        
            i = mod289(i); // Avoid truncation effects in permutation
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
        
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
        
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        float random(float n) {
            return fract(sin(n) * 43758.5453123);
        }
        
        void main() {
            vUv = uv;
            vec2 puv = offset.xy / uTextureSize;
            vPUv = puv;
        
            vec4 colA = texture2D(uTexture, puv);
            float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;
        
            vec3 displaced = offset;     
            displaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;
            float rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.1)));  
            displaced.z += rndz * (random(pindex) * 2.0 * uDepth);               
            displaced.xy -= uTextureSize * 0.5;
        
            float t = texture2D(uTouch, puv).r;
            displaced.z += t * -40.0 * rndz;
            displaced.x += cos(angle) * t * 40.0 * rndz;
            displaced.y += sin(angle) * t * 40.0 * rndz;     //20
        
            float psize = (snoise(vec2(uTime, pindex) * 0.5) + 2.0);
            psize *= max(grey, 0.2);
            psize *= uSize;
        
            vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
            mvPosition.xyz += position * psize;
            gl_Position = projectionMatrix * mvPosition;
        }
    `;
}

function fragmentShader() {
  return `
        precision highp float;
        uniform sampler2D uTexture;
        uniform float uAlphaCircle;        
        uniform float uAlphaSquare;          
        uniform float uCircleORsquare;

        varying vec2 vPUv;
        varying vec2 vUv;

        void main() {
            vec4 color = vec4(0.0);
            vec2 uv = vUv;
            vec2 puv = vPUv;

            vec4 colA = texture2D(uTexture, puv);

            float border = 0.3;
            float radius = 0.5;
            float dist = radius - distance(uv, vec2(0.5));   
            float t = smoothstep(uCircleORsquare, border, dist);

            color = colA;
            color.a = t;

            //gl_FragColor = vec4(color.r, color.g, color.b, uAlphaSquare);
            gl_FragColor = vec4(color.r, color.g, color.b, t - uAlphaCircle);
        }
    `;
}
