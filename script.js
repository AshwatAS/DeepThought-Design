
// JavaScript for collapsible Journey Board
const journeyBoard = document.getElementById("journeyBoard");
const toggleBtn = document.getElementById("toggleBtn");

// Toggle the Journey Board expansion
toggleBtn.addEventListener("click", () => {
    journeyBoard.classList.toggle("expanded");
    toggleBtn.classList.toggle("rotate");
});

// JSON data (replace with a fetch call if needed)
const jsondata = {
    // Simplified JSON snippet
    tasks: [
        {
            task_id: 18882,
            task_title: "Explore the world of management",
            task_description: "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            assets: [
                {
                    asset_id: 18883,
                    asset_title: "Technical Project Management",
                    asset_description: "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable\r\nStaggering Approach",
                    asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
                    asset_type: "display_asset",
                    asset_content_type: "video"
                },
                {
                    asset_id: 18884,
                    asset_title: "Threadbuild",
                    asset_description: "Watch the video and thread build, and jot out key threads while watching that video.",
                    asset_content: " ",
                    asset_type: "input_asset",
                    asset_content_type: "threadbuilder"
                },
                {
                    asset_id: 18885,
                    asset_title: "Structure your pointers",
                    asset_description: "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    asset_content: " ",
                    asset_type: "input_asset",
                    asset_content_type: "article"
                },
                {
                    asset_id: 18886,
                    asset_title: "4SA Method",
                    asset_description: "To explore more read more",
                    asset_content: "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    asset_type: "display_asset",
                    asset_content_type: "article"
                }
            ]
        }
    ]
};

// Get tasks array from JSON data
const tasks = jsondata.tasks;

// Function to create the asset card
function createAssetCard(asset) {
    return `
        <div class="fullcard">
        <div class="card-header">
            <h1>${asset.asset_title}</h1>
            <div class="info-icon">
                <i>ℹ</i>
            </div>
        </div>
        <div class="card-description">
            <strong>Description:</strong> ${asset.asset_description}
        </div>
            ${asset.asset_content_type === "video" ? `
                <iframe 
                    src="${asset.asset_content}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="${asset.asset_title}">
                </iframe>` : ""}
            ${asset.asset_content_type === "article" || asset.asset_content_type === "input_asset" ? `
                <a href="${asset.asset_content}" target="_blank">Read more</a>` : ""}
        </div>
    `;
}

// Loop through tasks and dynamically create content
tasks.forEach(task => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // Add task title and description
    const taskTitle = document.createElement("h2");
    taskTitle.textContent = task.task_title;

    const taskDescription = document.createElement("p");
    taskDescription.innerHTML = task.task_description;

    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);

    // Loop through the assets of the task
// Create a single card container
const cardContainer = document.createElement("div");
cardContainer.className = "card-container"; // Assign a class for styling

// Loop through the assets and add cards to the container
task.assets.forEach(asset => {
    const assetHTML = createAssetCard({
        asset_title: asset.asset_title,
        asset_description: asset.asset_description,
        asset_content: asset.asset_content,
        asset_content_type: asset.asset_content_type
    });

    // Create a card element and append it to the card container
    const card = document.createElement("div");
    card.className = "card"; // Assign a class for individual cards
    card.innerHTML = assetHTML;

    cardContainer.appendChild(card); // Append the card to the single container
});

// Append the single card container to the taskContainer
taskContainer.appendChild(cardContainer);


    // Append the task container to the main content area
    document.querySelector(".main-content").appendChild(taskContainer);
});
