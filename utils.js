function createProjectElement(id, project){
    /* Create an element in Project
    tag: some tags
    title: title of the project or publications
    paper_url: link to the paper
    authors: authors
    conference: publication venue
    image (optional): directory to project image
    others (optional): anything else
    */
    if (project.tag == null)
        project.tag = id;
    if (project.others == null)
        project.others = "";

    html_img = `<img src='${project.image}' style="max-width: 200px"></div></div>`
    // Conditionally create [Paper] and [Code] links if they exist
    let paperLink = project.paper_url ? `[<a href="${project.paper_url}">Paper</a>]` : "";
    let codeLink = project.code_url ? `[<a href="${project.code_url}">Code</a>]` : "";
    let links = [paperLink, codeLink].filter(Boolean).join(" ");
    let linksSection = links ? `${links}<br><br>` : "";
    html_txt = `<p>
      <papertitle>${project.title}</papertitle>
      <br>
      ${project.authors}
      <br>
      <em>${project.conference}</em>
      <br>
      ${linksSection}
      ${project.others}`

    document.getElementById(id + "-img").innerHTML = html_img;
    document.getElementById(id + "-txt").innerHTML = html_txt;
}


function createSimpleElement(id, project){
    /* Create a simple element
    tag: some tags
    title: title of the project or publications
    paper_url: link to the paper
    authors: authors
    time: time
    image (optional): directory to project image
    others (optional): anything else
    */
    if (project.tag == null)
        project.tag = id;
    if (project.others == null)
        project.others = "";

    html_img = `<img src='${project.image}' style="max-width: 200px"></div></div>`

    // Conditionally create link for title based on the existence of project.paper_url
    if (project.paper_url) {
        html_txt = `<p>
          <a href="${project.paper_url}"><papertitle>${project.title}</papertitle></a>
          <br>
          ${project.authors}
          <br>
          <em>${project.time}</em>
          <br>
          <br>
          ${project.others}`
    } else {
        html_txt = `<p>
          <papertitle>${project.title}</papertitle>
          <br>
          ${project.authors}
          <br>
          <em>${project.time}</em>
          <br>
          <br>

          ${project.others}`
    }

    document.getElementById(id + "-img").innerHTML = html_img;
    document.getElementById(id + "-txt").innerHTML = html_txt;
}
