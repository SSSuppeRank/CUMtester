const as = document.querySelectorAll( "a" );
const bs = document.querySelectorAll( "b" );
const tds = document.querySelectorAll( "td" );
const titles = document.querySelectorAll( "title" );
const images = document.querySelectorAll( "img" );

for( let td of tds ) {
    tdHTML = td.innerHTML;
    td.innerHTML = tdHTML.replace( "Contester", "CUMтестер" );
    tdHTML = td.innerHTML;
    td.innerHTML = tdHTML.replace( "Contests", "CUMтестс" );

    for( let a of as ) {    
        if( a.innerHTML == "Contest scoreboard" ) {
            a.innerHTML = '<img src="https://cdn.akamai.steamstatic.com/steam/apps/1637760/capsule_616x353.jpg?t=1664463492">';
        }
    
        aText =  a.innerHTML;
        a.innerHTML = aText.replace('Week', 'Dungeon');
    }

    for( let title of titles ) {
        titleText = title.innerHTML;
        title.innerHTML = titleText.replace('Week', 'Dungeon');
        titleText = title.innerHTML;
        title.innerHTML = titleText.replace( "Contester", "CUMтестер" );
    }

    for( let img of images ) {
        img.setAttribute( "src", "https://cdn1.iconfinder.com/data/icons/smashicons-medical-yellow-vol-3/60/132_-Penis-_medical_health_healthcare-512.png" );
    }

    for( let b of bs ) {
        if( b.innerHTML == "1" ) {
            b.innerHTML = "Dungeon master";
        }
    }
}
