let currentType = 'all';

let jobs = [
    {id:1, jobName: 'Mobile First Corp', post:'React Native Developer', place:'Remote', type:'Full-time', salary:'$130,000-$175,000', applied:'NOT APPLIED', description:'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', status:'all'},
    {id:2, jobName: 'WebFlow Agency', post:'Web Designer & Developer', place:'Los Angeles, CA', type:'Part-time', salary:'$80,000-$12,000', applied:'NOT APPLIED', description:'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.', status:'all'},
    {id:3, jobName: 'DataViz Solutions', post:'Data Visualization Specialist', place:'Boston, MA', type:'Full-time', salary:'$125,000-$165,000', applied:'NOT APPLIED', description:'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.', status:'all'},
    {id:4, jobName: 'CloudFirst Inc', post:'Backend Developer', place:'Seattle, WA', type:'Full-time', salary:'$140,000-$190,000', applied:'NOT APPLIED', description:'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.', status:'all'},
    {id:5, jobName: 'Innovation Labs', post:'UI/UX Engineer', place:'Austin, TX', type:'Full-time', salary:'$110,000-$150,000', applied:'NOT APPLIED', description:'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.', status:'all'},
    {id:6, jobName: 'MegaCorp Solutions', post:'JavaScript Developer', place:'New York, NY', type:'Full-time', salary:'$130,000-$170,000', applied:'NOT APPLIED', description:'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.', status:'all'},
    {id:7, jobName: 'StartupXYZ', post:'Full Stack Engineer', place:'Remote', type:'Full-time', salary:'$120,000-$160,000', applied:'NOT APPLIED', description:'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.', status:'all'},
    {id:8, jobName: 'TechCorp Industries', post:'Senior Frontend Developer', place:'Remote', type:'Full-time', salary:'$130,000-$175,000', applied:'NOT APPLIED', description:'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.', status:'all'},
]


function toggleStyle(type, element){
    currentType = type;

    const buttons = document.querySelectorAll('.type-btn');
    for(const btn of buttons){
        btn.classList.remove('bg-[#3B82F6]', 'text-white');
        btn.classList.add('text-[#323B49]','bg-white');
    }

    element.classList.remove('text-[#323B49]','bg-white');
    element.classList.add('bg-[#3B82F6]', 'text-white');
}


// const totalJob = document.getElementById('total');
// const interview = document.getElementById('interview');
// const rejected = document.getElementById('rejected');

// const filteredSection = document.getElementById('filtered-section')


// const totalCards = document.getElementById('cards');
// const numberOfCards = totalCards.children.length;

// // array to count interview and rejected
// let interviewList = [];
// let rejectedList = [];

// // function to set total job number ->initially empty
// function calculateCount() {
//     totalJob.innerText = numberOfCards;
//     interview.innerText = interviewList.length;
//     rejected.innerText = rejectedList.length;
// }

// // function call 
// calculateCount();


// function toggleStyle(id) {
//     document.getElementById('all-btn').classList.remove('bg-[#3B82F6]', 'text-white');
//     document.getElementById('interview-btn').classList.remove('bg-[#3B82F6]', 'text-white');
//     document.getElementById('rejected-btn').classList.remove('bg-[#3B82F6]', 'text-white');


//     document.getElementById('all-btn').classList.add('text-[#323B49]', 'bg-white');
//     document.getElementById('interview-btn').classList.add('text-[#323B49]', 'bg-white');
//     document.getElementById('rejected-btn').classList.add('text-[#323B49]', 'bg-white');

//     // selected button
//     document.getElementById(id).classList.remove('bg-white', 'text-[#323B49]');
//     document.getElementById(id).classList.add('bg-[#3B82F6]', 'text-white');

//     if(id == 'interview-btn'){
//         totalCards.classList.add('hidden');
//         filteredSection.classList.remove('hidden');
//     }
// }

// document.querySelector('main').addEventListener('click', function (event) {
//     if (event.target.classList.contains('iv')) {
//         const parentNode = event.target.parentNode.parentNode;
//         const title = parentNode.querySelector('.title').innerText;
//         const work = parentNode.querySelector('.work').innerText;
//         const about = parentNode.querySelector('.about').innerText;
//         const status = parentNode.querySelector('.status').innerText;
//         const description = parentNode.querySelector('.description').innerText;
//         // console.log(title, work, about, filter, description);

//         // object 
//         const cardInfo = {
//             title,
//             work,
//             about,
//             status,
//             description
//         }
//         const itemExists = interviewList.find(item => item.title == cardInfo.title)

//         parentNode.querySelector('.status').innerText = 'Interview';

//         if (!itemExists) {
//             interviewList.push(cardInfo);
//         }
//         renderInterview();
//     }
// })

// function renderInterview() {
//     document.getElementById('filtered-section').innerHTML = ''; //initially empty

//     for (let list of interviewList) {

//         let div = document.createElement('div');
//         div.className = 'bg-white p-6 flex justify-between rounded-[8px] shadow';
//         div.innerHTML = ` 
//                     <div>
//                         <h3 class=" title color-black font-semibold text-[18px] leading-[26px]">Mobile First Corp</h3>
//                         <p class="work text-[#64748B] mb-[20px]">React Native Developer</p>
//                         <p class="about text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
//                         <div>
//                             <p class="filter mt-5"><span class="bg-[#EEF4FF] py-2 px-3">NOT APPLIED</span></p>
//                             <p class="description text-[#323B49] mt-2">Build cross-platform mobile applications using React Native.
//                                 Work on products used by
//                                 millions of users worldwide.
//                             </p>
//                         </div>

                        
//                         <div class=" select-buttons mt-5">
//                             <button class="btn btn-soft btn-success border border-success">INTERVIEW</button>
//                             <button class="btn btn-soft btn-error border border-error">REJECTED</button>
//                         </div>
//                     </div>

                   
//                     <div>
//                         <button class="shadow btn btn-soft rounded-full"><i
//                                 class="fa-regular fa-trash-can"></i></button>
//                     </div>`


//         filteredSection.appendChild(div)
//     }
// }