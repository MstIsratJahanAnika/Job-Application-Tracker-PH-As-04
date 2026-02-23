let currentType = 'all';

let jobs = [
    {id:1, jobName: 'Mobile First Corp', post:'React Native Developer', place:'Remote', type:'Full-time', salary:'$130,000-$175,000', description:'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', status:'all'},
    {id:2, jobName: 'WebFlow Agency', post:'Web Designer & Developer', place:'Los Angeles, CA', type:'Part-time', salary:'$80,000-$12,000', description:'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.', status:'all'},
    {id:3, jobName: 'DataViz Solutions', post:'Data Visualization Specialist', place:'Boston, MA', type:'Full-time', salary:'$125,000-$165,000', description:'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.', status:'all'},
    {id:4, jobName: 'CloudFirst Inc', post:'Backend Developer', place:'Seattle, WA', type:'Full-time', salary:'$140,000-$190,000', description:'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.', status:'all'},
    {id:5, jobName: 'Innovation Labs', post:'UI/UX Engineer', place:'Austin, TX', type:'Full-time', salary:'$110,000-$150,000', description:'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.', status:'all'},
    {id:6, jobName: 'MegaCorp Solutions', post:'JavaScript Developer', place:'New York, NY', type:'Full-time', salary:'$130,000-$170,000', description:'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.', status:'all'},
    {id:7, jobName: 'StartupXYZ', post:'Full Stack Engineer', place:'Remote', type:'Full-time', salary:'$120,000-$160,000', description:'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.', status:'all'},
    {id:8, jobName: 'TechCorp Industries', post:'Senior Frontend Developer', place:'Remote', type:'Full-time', salary:'$130,000-$175,000', description:'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.', status:'all'},
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

    renderJobs();
}


function updateCounts(){
    const all = jobs.length;
    const interview = jobs.filter(job => job.status === 'interview').length;
    const rejected = jobs.filter(job => job.status === 'rejected').length;


    document.getElementById('total').innerText = all;
    document.getElementById('interview').innerText = interview;
    document.getElementById('rejected').innerText = rejected;

    let sectionNumber;
    if(currentType === 'all'){
        sectionNumber = all;
    }
    else if(currentType === 'interview'){
        sectionNumber = interview;
    }
    else{
        sectionNumber = rejected;
    }

    document.getElementById('sectionCount').innerText = sectionNumber + " jobs";

    if(sectionNumber > 0 && (currentType === 'interview' || currentType === 'rejected')){
        document.getElementById('sectionCount').innerText = sectionNumber + ' of ' + all + ' jobs';
    }

}

function renderJobs(){
    const container = document.getElementById('jobs-container');

    container.innerHTML = "";

    // filter jobs
    let filtered;
    if(currentType === 'all'){
        filtered = jobs;
    }
    else{
        filtered = jobs.filter(job => job.status === currentType);
    }
    // console.log(currentType);


    const hiddenDiv = document.getElementById('noJobSection');
    // connect to hidden tab
    if(filtered.length === 0){
        hiddenDiv.classList.remove('hidden');
    }
    else{
        hiddenDiv.classList.add('hidden');
    }

    for(let job of filtered){

        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-[8px] shadow";

        card.innerHTML = `
            
            <div class="space-y-4">

                
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="color-black font-semibold text-[18px] leading-[26px]">${job.jobName}</h3>
                        <p class="text-[#64748B] mb-[20px]">${job.post}</p>
                    </div>

                    <div>
                        <button onclick="deleteJob(${job.id})"
                            class="shadow btn btn-soft rounded-full cursor-pointer"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>

                <p class="text-[14px] leading-5 text-[#64748B] space-x-2">
                        <span class="inline-block">${job.place}</span> • <span
                            class="inline-block ml-2">${job.type}</span> • <span
                            class="inline-block ml-2">${job.salary}</span>
                    </p>

                    <div>
                        <div class = "${job.status === 'all'? 'hidden' : 'block'} mb-2">
                            <span class = "inline-block px-3 py-2 rounded border text-xs font-bold uppercase
                                ${job.status === 'interview' ? 'border-green-500 text-green-500 bg-green-200' :  'border-red-500 text-red-500 bg-red-200'}">
                                ${job.status}
                            </span>
                        </div>
                        <p class="text-[14px] color-gray leading-5 mt-2">${job.description}</p>
                    </div>

                    <div class="flex gap-2">
                        <button onclick="updateStatus(${job.id}, 'interview')" class="btn btn-soft btn-success border border-success">INTERVIEW</button>
                        <button onclick="updateStatus(${job.id}, 'rejected')" class="btn btn-soft btn-error border border-error">REJECTED</button>
                    </div>


                </div>
            </div>


        `;

        container.appendChild(card);
    }

    updateCounts();

}

function updateStatus(id, status) {

    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === id) {
            jobs[i].status = status;
            break; //status found
        }
    }

    renderJobs();
}


function deleteJob(id){
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();
}

renderJobs();
