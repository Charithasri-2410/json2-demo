
export default function json2html(data) {
    // Start the HTML table with the specified data attribute
    let html = <table data-user="charithasri2410@gmail.com"><thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead><tbody>;

    // Iterate through the data array
    data.forEach(item => {
        html += <tr><td>${item.Name || ''}</td><td>${item.Age || ''}</td><td>${item.Gender || ''}</td></tr>;
    });

    // Close the table tags
    html += </tbody></table>;

    return html;
}