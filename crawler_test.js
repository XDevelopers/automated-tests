const fs = require('fs');

Feature('Crawler - Lista de países e territórios');

Scenario('Lista de países e territórios', async ({ I }) => {
    const baseUrl = 'https://pt.wikipedia.org/wiki/Lista_de_pa%C3%ADses_e_territ%C3%B3rios_por_%C3%A1rea';
    
    I.amOnPage( baseUrl );
    I.wait( 5 );

    I.seeElement('table[class="wikitable"]');
    I.wait( 5 );

/*
    const elements = await I.executeScript(() => {
        return Array.from(document.querySelectorAll('table[class="wikitable"] tbody tr')).map(row => {
            let firstColumn = "";
            let secondColumn = "";
            if (row && row.querySelector('td:nth-child(2) a:nth-child(2)')) {
                // Country Name
                firstColumn = row.querySelector('td:nth-child(2) a:nth-child(2)').textContent;
                console.log(firstColumn);
            }
            if (row && row.querySelector('td:nth-child(3)')) {
                // Country Area
                secondColumn = row.querySelector('td:nth-child(3)').textContent;
                console.log(secondColumn);
            }

        return { countryName: firstColumn, area: secondColumn };
        });
    });

    // Salvar os dados em um arquivo JSON
    fs.writeFileSync('./output/output.json', JSON.stringify(elements, null, 2));
*/
    I.wait(5);
});
