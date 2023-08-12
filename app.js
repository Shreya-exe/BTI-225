/*********************************************************************************
*  BTI225 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _____Shreya_________________ Student ID: _129778221__ Date: __11 August, 2023___
*
*********************************************************************************/

document.addEventListener("DOMContentLoaded", function () {
    const countriesTable = document.getElementById("countries-table");

    fetch("https://restcountries.com/v3.1/independent?status=true")
        .then(response => response.json())
        .then(data => {
            const countries = Object.values(data);

            const tableMarkup = countries.map((country, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${country.name.common}</td>
                    <td><img src="${country.flags.png}" alt="Flag" width="30"></td>
                    <td><img src="${country.coatOfArms?.png || ""}" alt="Coat of Arms" width="30"></td>
                    <td>${country.capital?.[0] || "N/A"}</td>
                    <td>${country.subregion || "N/A"}</td>
                </tr>
            `).join("");

            const table = `
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Flag</th>
                            <th>Coat of Arms</th>
                            <th>Capital</th>
                            <th>(Sub)Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableMarkup}
                    </tbody>
                </table>
            `;

            countriesTable.innerHTML = table;
        })
        .catch(error => {
            console.error("An error occurred:", error);
            countriesTable.innerHTML = "Error loading data.";
        });
});
