*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#070b1a;
color:white;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
position:fixed;
width:100%;
background:rgba(0,0,0,.3);
backdrop-filter:blur(12px);
}

.logo{
font-size:28px;
font-weight:700;
color:#00e5ff;
}

.nav-links{
display:flex;
gap:30px;
list-style:none;
}

.nav-links a{
color:white;
text-decoration:none;
}

.hero{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero-content h1{
font-size:60px;
margin-bottom:15px;
}

.hero-content h2{
color:#00e5ff;
margin-bottom:20px;
}

.hero-content p{
max-width:700px;
margin:auto;
opacity:.8;
}

.btn{
display:inline-block;
margin-top:30px;
padding:15px 35px;
border-radius:40px;
background:#00e5ff;
color:black;
font-weight:600;
text-decoration:none;
}
