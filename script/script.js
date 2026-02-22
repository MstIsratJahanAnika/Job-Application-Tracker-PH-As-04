const totalJob = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');


const totalCards = document.getElementById('cards');
const numberOfCards = totalCards.children.length;

// array to count interview and rejected
let interviewList = [];
let rejectedList = [];

// function to set total job number ->initially empty
function calculateCount() {
    totalJob.innerText = numberOfCards;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}

// function call 
calculateCount();


function toggleStyle(id) {
    document.getElementById('all-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('interview-btn').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-btn').classList.remove('bg-[#3B82F6]', 'text-white');


    document.getElementById('all-btn').classList.add('text-[#323B49]', 'bg-white');
    document.getElementById('interview-btn').classList.add('text-[#323B49]', 'bg-white');
    document.getElementById('rejected-btn').classList.add('text-[#323B49]', 'bg-white');

    // selected button
    document.getElementById(id).classList.remove('bg-white', 'text-[#323B49]');
    document.getElementById(id).classList.add('bg-[#3B82F6]', 'text-white');
}

document.querySelector('main').addEventListener('click', function (event) {
    if (event.target.classList.contains('iv')) {
        const parentNode = event.target.parentNode.parentNode;
        const title = parentNode.querySelector('.title').innerText;
        const work = parentNode.querySelector('.work').innerText;
        const about = parentNode.querySelector('.about').innerText;
        const filter = parentNode.querySelector('.filter').innerText;
        const description = parentNode.querySelector('.description').innerText;
        // console.log(title, work, about, filter, description);

        // object 
        const cardInfo = {
            title,
            work,
            about,
            filter,
            description
        }

        console.log(cardInfo);

        const itemExists = interviewList.find(item => item.title == cardInfo.title)
        if (!itemExists) {
            interviewList.push(cardInfo);
        }
        filterInterview();
    }
})

function filterInterview() {
    document.getElementById('filtered-section').innerHTML = ''; //initially empty
    const div = document.createElement('div');
    div.className = 'bg-white p-6 flex justify-between rounded-[8px] shadow';
    div.innerHTML = ` 
                    <div>
                        <h3 class=" title color-black font-semibold text-[18px] leading-[26px]">Mobile First Corp</h3>
                        <p class="work text-[#64748B] mb-[20px]">React Native Developer</p>
                        <p class="about text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                        <div>
                            <p class="filter mt-5"><span class="bg-[#EEF4FF] py-2 px-3">NOT APPLIED</span></p>
                            <p class="description text-[#323B49] mt-2">Build cross-platform mobile applications using React Native.
                                Work on products used by
                                millions of users worldwide.
                            </p>
                        </div>

                        
                        <div class=" select-buttons mt-5">
                            <button class="btn btn-soft btn-success border border-success">INTERVIEW</button>
                            <button class="btn btn-soft btn-error border border-error">REJECTED</button>
                        </div>
                    </div>

                   
                    <div>
                        <button class="shadow btn btn-soft rounded-full"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>`
}