'use strict';

/**
 * Created by Administrator on 2017/2/15.
 */
var addrs = [{ first: '<Jane>', last: 'Bond' }, { first: 'Lars', last: '<Croft>' }];

var tmpl = function tmpl(addrs) {
    return '\n    <table>\n       ' + addrs.map(function (addr) {
        return '\n         <tr><td>' + addr.first + '</td></tr>\n         <tr><td>' + addr.last + '</td></tr>\n    ';
    }).join('') + '\n';
};

/*console.log(tmpl(addrs));*/

var templatex = '\n    <ul>\n       <% for(var i=0;i<data.supplies.length;i++){ %>\n       <li><%=data.supplies[i]%></li>\n       <%}%>\n';

document.body.innerHTML = tmpl(addrs);

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script = '(function parse(data){\n    var output = "";\n\n    function echo(html){\n      output += html;\n    }\n\n    ' + template + '\n\n    return output;\n  })';

    return script;
}

//# sourceMappingURL=PadStartAndPadEnd-compiled.js.map