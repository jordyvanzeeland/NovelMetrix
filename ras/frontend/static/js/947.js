(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[947],{764:(n,e,a)=>{"use strict";a.d(e,{Z:()=>s});var t=a(7294),r=a.n(t),l=a(9655);const s=function(){return r().createElement(r().Fragment,null,r().createElement("div",{className:"sidebar"},r().createElement("ul",null,r().createElement("li",null,r().createElement(l.OL,{to:"/"},r().createElement("i",{className:"fa fa-chart-bar"})," Dashboard")),r().createElement("li",null,r().createElement(l.OL,{to:"/booklist"},r().createElement("i",{className:"fas fa-book"})," Boekenlijst")))))}},6645:(n,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>v});var t=a(7294),r=a.n(t),l=a(3379),s=a.n(l),o=a(7795),i=a.n(o),d=a(569),p=a.n(d),c=a(3565),b=a.n(c),m=a(9216),g=a.n(m),j=a(4589),u=a.n(j),h=a(6514),x={};x.styleTagTransform=u(),x.setAttributes=b(),x.insert=p().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=g(),s()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;var f=a(381),T=a(764);const k=a(9755);k.DataTable=a(991),f.locale("nl");const E=function(){const n=(n,e,a)=>{0!==e&&!0===a?k("#DataTable").DataTable().column(n).search("(^"+e+"$)",!0,!1).draw():k("#DataTable").DataTable().column(n).search(e).draw()};return k(".author").on("change",(function(){n(1,this.value,!1)})),k(".genre").on("change",(function(){n(2,this.value,!1)})),k(".country").on("change",(function(){n(3,this.value,!1)})),r().createElement(r().Fragment,null,r().createElement("div",{className:"search-bar"},r().createElement("input",{type:"text",onChange:e=>n(0,e.target.value,!1),name:"search",id:"search",placeholder:"Zoeken..."})),r().createElement("div",{className:"filters"},r().createElement("select",{className:"author"},r().createElement("option",{value:""},"Filter op Schrijver")),r().createElement("select",{className:"genre"},r().createElement("option",{value:""},"Filter op Genre")),r().createElement("select",{className:"country"},r().createElement("option",{value:""},"Filter op Land"))))},y=a(9755);y.DataTable=a(991),f.locale("nl");const v=function(){var[n,e]=(0,t.useState)([]);const l=(n,e,a)=>{if(console.log(e,a),e&&!n.find("option:contains('"+a+"')").length){var t=new Option(e,e);t.innerHTML=a,n[0].appendChild(t)}};return(0,t.useEffect)((()=>{document.title="Boekenlijst - Reading Analytics System",a.e(225).then(a.bind(a,3225)).then((n=>n.getAllBooks().then((n=>{e(n),setTimeout((()=>{y("#DataTable").DataTable({language:{url:"https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Dutch.json"},dom:'rt<"bottom"pl><"clear">',order:[]})}),1e3)}))))}),[]),r().createElement(r().Fragment,null,r().createElement(T.Z,null),r().createElement("div",{className:"content"},r().createElement(E,null),r().createElement("div",{className:"DataTable_Container"},r().createElement("table",{id:"DataTable",className:"showHead table responsive nowrap",width:"100%"},r().createElement("thead",null,r().createElement("tr",null,r().createElement("th",null,"Boek"),r().createElement("th",null,"Schrijver"),r().createElement("th",null,"Genre"),r().createElement("th",null,"Land"),r().createElement("th",null,"Aantal pagina's"),r().createElement("th",null,"Gelezen op"),r().createElement("th",null,"Beoordeling"))),r().createElement("tbody",null,n.map(((n,e)=>{var a=n.country_code.toLowerCase(),t=(n=>{const e=n.toUpperCase().split("").map((n=>127397+n.charCodeAt()));return String.fromCodePoint(...e)})(n.country_code),s=n.country,o=t+" "+n.country;return l(y(".genre"),n.genre,n.genre),l(y(".country"),s,o),l(y(".author"),n.author,n.author),r().createElement("tr",{key:n.id},r().createElement("td",null,n.name),r().createElement("td",null,n.author),r().createElement("td",null,n.genre),r().createElement("td",null,r().createElement("img",{src:`https://flagcdn.com/20x15/${a}.png`})," ",n.country),r().createElement("td",null,n.pages),r().createElement("td",null,f(n.readed).format("MMMM YYYY")),r().createElement("td",null,r().createElement("i",{class:"fas fa-star"}),n.rating))})))))))}},6514:(n,e,a)=>{"use strict";a.d(e,{Z:()=>o});var t=a(8081),r=a.n(t),l=a(3645),s=a.n(l)()(r());s.push([n.id,".dataTable-top td{\n    vertical-align: top;\n}\n\n.dataTable-top td{\n    padding-top:15px !important;\n}\n\n.DataTable_Container {\n    margin: 0 !important;\n    margin-top:30px !important;\n}\n\n#DataTable{\n    margin-bottom:0;\n    box-shadow: 0 2px 0 1px rgb(0 0 0/3%);\n}\n\n#DataTable a {\n    color: #000;\n    text-decoration: none;\n}\n\n#DataTable i {\n    color: #ffbe0e;\n    margin-right:10px;\n}\n\n#DataTable thead th{\n    padding: 20px 20px;\n    border-bottom: 1px solid #efefef;\n    font-weight: 600;\n    font-size: 15px;\n    color:#000000;\n}\n\n#DataTable tr{\n    background:#ffffff;\n}\n\n#DataTable tr:first-child td{\n    border-top:none;\n}\n\n#DataTable td{\n    padding:14px;\n}\n\n#DataTable{\n    margin-bottom:0;\n}\n\n#DataTable .openAlarm .pictogram {\n    /* display: inline-block;\n    padding: 0 0 0 0;\n    margin: 10px 10px 10px 10px;\n    background: rgb(255,0,0); */\n    display: inline-block;\n    margin: 10px 10px 10px 10px;\n    background: rgb(255,0,0);\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n    border-radius: 100%;\n    padding: 5px;\n}\n\n#DataTable tbody td:first-child{\n    padding: 0rem;\n}\n\n\n#DataTable td{\n    padding:10px;\n    color: #000000;\n    font-size: 15px;\n    height: 45px;\n    font-weight: 400;\n    vertical-align: middle;\n    padding-left: 20px !important;\n    border-top: 1px solid #efefef;\n    border-bottom: none;\n}\n\n#DataTable .openAlarm td{\n    padding:10px;\n    color: #000000;\n    font-size: 14px;\n    height: 45px;\n    font-weight: 400;\n    vertical-align: middle;\n    border-top: 1px solid #efefef;\n}\n\n#DataTable .openAlarm:first-child td{\n    border-top:none;\n}\n\n.DataTable_Container {\n    margin: 0px 2.5rem 0px 2.5rem;\n}\n\n.DataTable_Container thead{\n    display:none;\n}\n\n\n.DataTable_Container table{\n    margin-bottom:0;\n}\n\n.DataTable_Container h2 {\n    float: left;\n    margin-top: 15px;\n    font-size: 14px;\n    font-weight: 600;\n    padding-left: 20px;\n    width: 100%;\n    border-bottom: solid 1px #e7eaed;\n    padding-bottom: 15px;\n    margin-bottom: 0;\n}\n\n.DataTable_Container .historyAlarm .pictogram {\n    /* display: inline-block;\n    padding: 0 0 0 0;\n    margin: 10px 10px 10px 10px;\n    background: rgb(255,0,0); */\n    display: inline-block;\n    margin: 10px 10px 10px 10px;\n    background: rgb(255,0,0);\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n    border-radius: 100%;\n    padding: 5px;\n}\n\n.DataTable_Container .table tbody td:first-child{\n    padding: 0rem;\n}\n\n.DataTable_Container .historyAlarm td{\n    padding:10px;\n    color: #000000;\n    font-size: 14px;\n    height: 45px;\n    font-weight: 100;\n    vertical-align: middle;\n    border-top: 1px solid #efefef;\n}\n\n.DataTable_Container .historyAlarm:first-child td{\n    border-top:none;\n}\n\n.DataTable_Container .dataTables_length{\n    padding: 20px 0;\n}\n\n.DataTable_Container .dataTables_length select{\n    border: 1px solid #ced4da !important;\n    padding: 5px 5px !important;\n    margin-right: 5px !important;\n    background:#ffffff;\n}\n\n.DataTable_Container .dataTables_filter{\n    padding: 20px 0;\n}\n\n.DataTable_Container .dataTables_filter input{\n    border: 1px solid #ced4da !important;\n    padding: 5px 5px !important;\n    margin-right: 5px !important;\n    background:#ffffff;\n}\n\n.DataTable_Container table.dataTable.no-footer {\n    border-bottom: none;\n}\n\n.DataTable_Container .dataTables_info{\n    padding: 20px 0;\n    font-size: 14px;\n}\n\n.DataTable_Container .dataTables_paginate{\n    padding: 20px 0;\n}\n\n.DataTable_Container .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {\n    background: none !important;\n    background-color: #8066ee !important;\n    border-color: #8066ee !important;\n    color: #fff !important;\n}\n\n.DataTable_Container .dataTables_wrapper .dataTables_paginate .paginate_button:hover {\n    background: none !important;\n    background-color: #eaebec !important;\n    color: #000 !important;\n}\n\n.dataTables_wrapper .dataTables_paginate{\n    float:right;\n}\n\n.dataTables_wrapper .dataTables_paginate .paginate_button {\n    box-sizing: border-box;\n    display: inline-block;\n    min-width: 1.5em;\n    padding: 0.5em 1em;\n    margin-left: 2px;\n    text-align: center;\n    text-decoration: none !important;\n    cursor: pointer;\n    color: #333 !important;\n    border: 1px solid transparent;\n    border-radius: 2px;\n    font-size: 13px;\n}\n\n.showHead thead{\n    display: table-header-group;\n}\n\n.badge-info{\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n    padding: 5px 15px;\n}",""]);const o=s},6700:(n,e,a)=>{var t={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function r(n){var e=l(n);return a(e)}function l(n){if(!a.o(t,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t[n]}r.keys=function(){return Object.keys(t)},r.resolve=l,n.exports=r,r.id=6700}}]);