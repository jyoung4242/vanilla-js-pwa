/*style.css*/
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  line-height: 1;
  background-color: var(--current-background);
  color: var(--current-foreground);
}
.color1 {
  color: #131617;
}
.color2 {
  color: #34393c;
}
.color3 {
  color: #5e676b;
}
.color4 {
  color: #929fa4;
}
.color5 {
  color: #d0e3e9;
}
:root {
  /* Dark theme */
  --dark-background: #34393c;
  --dark-dark-accent: #131617;
  --dark-neutral: #5e676b;
  --dark-light-accent: #929fa4;
  --dark-foregeound: #d0e3e9;
  /* Light theme */
  --light-background: #d0e3e9;
  --light-dark-accent: #131617;
  --light-foregeound: #34393c;
  --light-neutral: #5e676b;
  --light-light-accent: #929fa4;
  /* Defaults */
  --current-background: var(--light-background);
  --current-dark-accent: var(--light-dark-accent);
  --current-light-accent: var(--light-light-accent);
  --current-foreground: var(--light-foregeound);
  --current-neutral: var(--light-neutral);
}
@media (prefers-color-scheme: dark) {
  :root {
    --current-background: var(--dark-background);
    --current-foreground: var(--dark-foregeound);
    --current-dark-accent: var(--dark-dark-accent);
    --current-light-accent: var(--dark-light-accent);
    --current-neutral: var(--dark-neutral);
  }
}

body {
  background-color: aliceblue;
}
.main {
  margin: 0 auto;
  background-color: cadetblue;
  text-align: center;
  padding: 3rem;
}

h1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
  font-size: 3rem;
}
button {
  padding: 1rem 2rem;
  color: darkcyan;
  border: #fff;
  background-color: #fff;
}
p {
  color: #fff;
  font-size: 1.6rem;
}
