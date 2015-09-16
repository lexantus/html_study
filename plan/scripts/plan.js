function createBaseStructure(date) {
	var divWrapper = document.createElement("div");
	divWrapper.setAttribute("id", "wrapper");

	var header = document.createElement("header");
	header.setAttribute("id", "header");
	var h1 = document.createElement("h1");
	var time = document.createElement("time");
	time.setAttribute("datetime", date);
	time.textContent = "today";
	h1.innerHTML = "Plan on " + time.innerHTML;
	header.appendChild(h1); 
	
	divWrapper.appendChild(header);

	var articlePlan = document.createElement("article");
	articlePlan.setAttribute("id", "plan");
	var thoughtPlan = document.createElement("article");
	thoughtPlan.setAttribute("id", "thoughtPlan");

	var planListUL = document.createElement("ul");
	articlePlan.appendChild(planListUL);

	var h3Thoughts = document.createElement("h3");
	h3Thoughts.textContent = "Любые мысли здесь";
	thoughtPlan.appendChild(h3Thoughts);

	divWrapper.appendChild(articlePlan);
	divWrapper.appendChild(thoughtPlan);

	document.querySelector("body").appendChild(divWrapper);
}

function addPlan(summary, description, done) {
	var ul = document.querySelector("#plan ul");
	var li = document.createElement("li");

	if (description) {
		var details = document.createElement("details");
		var sum = document.createElement("summary");
		sum.textContent = summary;
		details.innerHTML = sum.innerHTML + description;
		li.appendChild(details);
	} else {
		li.textContent = summary;
	}
	if (done) {
		var del = document.createElement("del");
		del.appendChild(li);
		ul.appendChild(del);
	} else {
		ul.appendChild(li);
	}
}

function addThought(thought) {
	var p = document.createElement("p");
	p.textContent = thought;
	var thoughtArticle = document.getElementById("thoughtPlan");
	thoughtArticle.appendChild(p);
}