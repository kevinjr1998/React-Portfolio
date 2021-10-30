(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(4),c=a.n(r),l=a(2),s=a(0);var i=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(s.jsxs)("ul",{className:"nav nav-tabs d-flex flex-wrap",children:[Object(s.jsx)("li",{className:"nav-item mx-5",children:Object(s.jsx)("a",{href:"#about",onClick:function(){return a("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(s.jsx)("li",{className:"nav-item mx-5",children:Object(s.jsx)("a",{href:"#portfolio",onClick:function(){return a("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(s.jsx)("li",{className:"nav-item mx-5",children:Object(s.jsx)("a",{href:"#CV",onClick:function(){return a("CV")},className:"CV"===t?"nav-link active":"nav-link",children:"CV"})}),Object(s.jsx)("li",{className:"nav-item mx-5",children:Object(s.jsx)("a",{href:"#contact",onClick:function(){return a("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})})]})};var o=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("header",{style:{backgroundColor:"#291F1E"},children:[Object(s.jsx)("h1",{className:"px-2 py-4",style:{color:"white"},children:" Kevin Ryner "}),Object(s.jsx)(i,{currentPage:t,handlePageChange:a})]})})},d=a.p+"static/media/headshot.edbd54c0.jpg";function u(){return Object(s.jsxs)("div",{className:"px-3 d-flex flex-wrap",children:[Object(s.jsx)("h2",{className:"py-2",children:"About Page"}),Object(s.jsxs)("div",{className:"d-inline-flex flex-wrap justify-content-start py-3",children:[Object(s.jsx)("img",{src:d,className:"img-fluid border rounded d-inline-flex flex-wrap my-3",style:{height:280,aspectRatio:2.5,backgroundColor:"transparent"},alt:"Headshot"}),Object(s.jsx)("p",{className:"d-flex flex-wrap",children:"I am a junior full-stack web developer with a background in physics looking to leverage my problem solving skills. I am currently working towards earning a certificate in full stack development from the University Coding Bootcamp, hosted by University of Birmingham. I have knowledge and skills in both front end technologies such as ReactJS, HTML and Bootstrap, but also several back end technologies, like Node.JS, MongoDB and MySQL."})]})]})}var j=a.p+"static/media/Kevin_Ryner_CV.1f201803.pdf";function h(){return Object(s.jsxs)("div",{style:{backgroundColor:"#6CD9FC"},className:"px-3",children:[Object(s.jsx)("h2",{className:"p-2 ",children:"My CV "}),Object(s.jsxs)("a",{href:j,className:"p-2 ",download:"Kevin_Ryner_CV.pdf",children:[" ",Object(s.jsx)("button",{className:"p-2 btn btn-primary text-center",children:" Click to Download My CV"})]}),Object(s.jsx)("h3",{className:"p-2 ",children:"Front-End Proficiencies "}),Object(s.jsx)("ul",{children:["React","JavaScript","HTML","CSS","Handlebars","Responsive Design","Bootstrap","jQuery","Tailwind"].map((function(e,t){return Object(s.jsxs)("li",{children:[" ",e]},t)}))}),Object(s.jsx)("h3",{className:"p-2 ",children:"Back-End Proficiencies "}),Object(s.jsx)("ul",{children:["Node.js","MySQL, Sequelize","MongoDB, Mongoose","GraphQL","Express"].map((function(e,t){return Object(s.jsxs)("li",{children:[" ",e]},t)}))})]})}function b(e){return/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(String(e).toLowerCase())}var m=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],d=i[1],u=Object(n.useState)(""),j=Object(l.a)(u,2),h=j[0],m=j[1],x=Object(n.useState)(""),f=Object(l.a)(x,2),p=f[0],v=f[1],g=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?r(n):"userName"===a?d(n):m(n)};return Object(s.jsxs)("div",{className:"d-inline-flex flex-wrap flex-column px-3 ",children:[Object(s.jsx)("h2",{className:"p-2",children:"Contact Page"}),Object(s.jsxs)("form",{className:"form d-inline-flex flex-wrap flex-column w-90 ",children:[Object(s.jsxs)("div",{className:"form-group p-2",children:[Object(s.jsx)("label",{htmlFor:"nameInput",children:" Enter Your Name"}),Object(s.jsx)("input",{value:o,name:"userName",className:"form-control",onChange:g,onBlur:function(e){return e.preventDefault(),!!o||(v("Please enter a name"),!1)},type:"text",id:"nameInput",placeholder:"Name "})]}),Object(s.jsxs)("div",{className:"form-group p-2",children:[Object(s.jsx)("label",{htmlFor:"emalInput",children:" Enter Your Email: "}),Object(s.jsx)("input",{value:a,className:"form-control",name:"email",onChange:g,onBlur:function(e){return e.preventDefault(),!!b(a)||(v("Please enter a valid email"),!1)},type:"email",id:"emalInput",placeholder:"Email"})]}),Object(s.jsxs)("div",{className:"form-group p-2",children:[Object(s.jsx)("label",{htmlFor:"messageInput",children:" Enter a Message: "}),Object(s.jsx)("textarea",{value:h,name:"message",className:"form-control",onChange:g,onBlur:function(e){return e.preventDefault(),!!h||(v("Please enter a message"),!1)},type:"text",id:"messageInput",placeholder:"Enter A Message",rows:"3"})]}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary m-2",onClick:function(e){e.preventDefault(),(b(a)?o?h||(v("Please enter a message"),0):(v("Please enter a name"),0):(v("Please enter a valid email"),0))&&(alert("Message has been sent!"),d(""),m(""),r(""),v(""))},children:"Submit"})]}),p&&Object(s.jsx)("div",{className:"p-2",children:Object(s.jsx)("p",{className:"error-text text-danger",children:p})}),Object(s.jsxs)("div",{className:" d-flex flex-wrap",children:[Object(s.jsx)("p",{className:"p-2 text-center",children:" Mobile Number: 07597 087862 "}),Object(s.jsxs)("p",{className:"p-2 text-center",children:[" Email: ",Object(s.jsx)("a",{href:"mailto:kevinryner@yahoo.co.uk",children:" kevinryner@yahoo.co.uk "})]})]})]})};function x(e){var t=e.portCards,a={cardStyles:{width:"40rem",height:"35rem",backgroundColor:"#FFFDD0"}};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{style:a.cardStyles,className:" card d-inline-flex flex-column justify-content-center align-self-center align-items-center border rounded m-3 ",children:[Object(s.jsx)("h1",{className:"display-4 text-center",children:e.title}),Object(s.jsx)("img",{src:e.image,className:"img-fluid d-flex img-thumbnail",alt:"My-5-Star-Local"}),Object(s.jsxs)("div",{className:"card-body d-inline-flex flex-column justify-content-center",children:[Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:" text-center btn btn-primary m-2",href:e.repoLink,children:" Link to GitHub Repository "}),Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",className:" text-center btn btn-primary m-2",href:e.appLink,children:" Link to Deployed Application"})]})]},t)})}))})})}var f=a.p+"static/media/my5StarLocal.84db8f18.gif",p=a.p+"static/media/techBlogGif.7a948943.gif",v=a.p+"static/media/Weather_Dashboard.4aab8b2b.gif",g=a.p+"static/media/Budget_Tracker.22ed1b2c.gif",k=a.p+"static/media/Note_Taker_Screenshot.37d7fe9b.png",L=a.p+"static/media/Fitness_Tracker.4194b64a.gif";function O(){var e=[{title:"My 5STAR Local",image:f,appLink:"https://vast-journey-10843.herokuapp.com/",repoLink:"https://github.com/kevinjr1998/My-5-Star-Local"},{title:"Tech Blog",image:p,appLink:"https://peaceful-basin-57768.herokuapp.com/",repoLink:"https://github.com/kevinjr1998/Tech_Blog"},{title:"Weather Dashboard",image:v,appLink:"https://kevinjr1998.github.io/Weather_Dashboard/",repoLink:"https://github.com/kevinjr1998/Weather_Dashboard"},{title:"Budget Tracker",image:g,appLink:"https://pacific-lowlands-14349.herokuapp.com/",repoLink:"https://github.com/kevinjr1998/Budget_Tracker"},{title:"Note Taker",image:k,appLink:"https://stark-headland-34041.herokuapp.com/",repoLink:"https://github.com/kevinjr1998/Note_Taker"},{title:"Workout Tracker",image:L,appLink:"https://dry-citadel-64212.herokuapp.com",repoLink:"https://github.com/kevinjr1998/Workout_Tracker"}];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"p-3 ",children:"Portfolio page"}),Object(s.jsx)("div",{className:"d-inline-flex flex-column align-self-center justify-content-center",children:Object(s.jsx)(x,{portCards:e})})]})}var V=a.p+"static/media/GitHubLogo.48450e60.png";function y(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("footer",{style:{backgroundColor:"#291F1E",color:"white"},className:"d-flex justify-content-center align-content-center border rounded py-2",children:[Object(s.jsxs)("div",{className:"d-flex px-3",children:[Object(s.jsx)("h3",{className:"px-2",children:" GitHub:  "}),Object(s.jsx)("a",{href:"https://github.com/kevinjr1998",target:"_blank",rel:"noreferrer",className:"smLink rounded",children:Object(s.jsx)("img",{src:V,className:"img-fluid rounded",alt:"GitHub Logo",style:{width:60,aspectRatio:1.5,backgroundColor:"transparent"}})})]}),Object(s.jsxs)("div",{className:" d-flex px-3 ",children:[Object(s.jsx)("h3",{className:"px-2",children:" LinkedIn:  "}),Object(s.jsx)("a",{href:"https://www.linkedin.com/in/kevin-ryner/",target:"_blank",rel:"noreferrer",className:"smLink rounded",children:Object(s.jsx)("img",{src:"data:image/png;base64,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",className:"img-fluid rounded smLink",alt:"LinkedIn Logo",style:{width:40,aspectRatio:1.5,backgroundColor:"transparent"}})})]}),Object(s.jsxs)("div",{className:"d-flex px-3 mx-2 w-30",children:[Object(s.jsx)("h3",{className:"px-2",children:" StackOverflow:  "}),Object(s.jsx)("a",{href:"https://stackoverflow.com/users/15321370/",target:"_blank",rel:"noreferrer",className:"smLink rounded",children:Object(s.jsx)("img",{src:"data:image/png;base64,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",className:"img-fluid rounded smLink",alt:"StackOverflow Logo",style:{width:70,aspectRatio:1.5,backgroundColor:"transparent"}})})]})]})})}function C(){var e=Object(n.useState)("About"),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{currentPage:a,handlePageChange:function(e){return r(e)}}),"About"===a?Object(s.jsx)(u,{}):"Portfolio"===a?Object(s.jsx)(O,{}):"CV"===a?Object(s.jsx)(h,{}):Object(s.jsx)(m,{}),Object(s.jsx)(y,{})]})})}var N=function(){return Object(s.jsx)(C,{})};a(10),a(11);c.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.652c1514.chunk.js.map