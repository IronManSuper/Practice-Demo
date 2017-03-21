/**
 * Created by Administrator on 2017/2/15.
 */
const addrs = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

const tmpl=addrs=>`
    <table>
       ${addrs.map(addr=>`
         <tr><td>${addr.first}</td></tr>
         <tr><td>${addr.last}</td></tr>
    `).join('')}
`;

/*console.log(tmpl(addrs));*/


var templatex=`
    <ul>
       <% for(var i=0;i<data.supplies.length;i++){ %>
       <li><%=data.supplies[i]%></li>
       <%}%>
`;

document.body.innerHTML=tmpl(addrs);



function compile(template){
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
        `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}