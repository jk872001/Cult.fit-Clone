import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

document.getElementById("icon").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("userPic").addEventListener("click", () => {
    window.location.href = "profile.html";
});

