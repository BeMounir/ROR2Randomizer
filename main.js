const categoryColors = {
    survivors: "#8fa5d0",
    artifacts: "#E7C7E6",
    white: "#cccccc",
    green: "#79C444",
    red: "#F25D50",
    yellow: "#D4E123",
    lunar: "#44E0F9",
    voidWhite: "#ff99ff",
    voidGreen: "#ff99ff",
    voidRed: "#ff99ff",
    voidYellow: "#ff99ff",
    equipment: "#ff9900",
    equipmentLunar: "#44E0F9",
    equipmentElite: "#ff9900"
};

const historyList = document.getElementById("historyList");
const maxHistory = 10;

function preloadImages() {
    for (const i in items) {
        items[i].forEach(item => {
            if (item.image) {
                const img = new Image();
                img.src = item.image;
            }
        });
    }
}

window.addEventListener('load', preloadImages);

function getRandomItem() {
    const category = document.getElementById('categorySelect').value;
    const sotvActive = document.getElementById('sotvFilter').classList.contains('selected');
    const sotsActive = document.getElementById('sotsFilter').classList.contains('selected');
    const result = document.getElementById('result');
    const description = document.getElementById('description');
    const image = document.getElementById('itemImage');

    let categoryItems = items[category];

    if (!categoryItems) {
        result.innerText = "Category not found!";
        result.classList.add("show");
        return;
    }

    const filtered = categoryItems.filter(item => {
        if (!sotvActive && item.sotv) return false;
        return !(!sotsActive && item.sots);
    });

    if (filtered.length === 0) {
        result.innerText = "Of course there won't be any items if you deselect SOTV.";
        image.style.display = "none";
        result.classList.add("show");
        return;
    }

    const random = filtered[Math.floor(Math.random() * filtered.length)];

    description.classList.remove("show");
    result.classList.remove("show");
    if (image.style.display !== "none") {
        image.classList.remove("show");
    }

    setTimeout(() => {
        let nameHTML = random.name;

        if (random.sotv) {
            nameHTML += ` <img src="images/icons/SotV_Icon.webp" class="tag-icon">`;
        }

        if (random.sots) {
            nameHTML += ` <img src="images/icons/SotS_Icon.webp" class="tag-icon">`;
        }

        result.innerHTML = nameHTML;
        description.innerText = random.description || "";
        description.classList.add("show");

        const color = categoryColors[category] || "#ffcc00";
        result.style.color = color;
        result.style.textShadow = `0 0 1px ${color}, 0 0 2px ${color}`;

        const img = new Image();
        img.onload = () => {
            image.src = img.src;
            image.style.display = "block";
            void image.offsetWidth;
            image.classList.add("show");
        };

        if (random.image) {
            img.src = random.image;
        } else {
            img.src = "";
        }

        result.classList.add("show");

        addToHistory(random.name);
    }, 200);
}


function addToHistory(itemName) {
    const category = document.getElementById('categorySelect').value;

    const li = document.createElement("li");
    li.textContent = itemName;

    li.style.color = categoryColors[category] || "#ffcc00";

    historyList.insertBefore(li, historyList.firstChild);

    if (historyList.children.length > maxHistory) {
        historyList.removeChild(historyList.lastChild);
    }
}

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
    });
});