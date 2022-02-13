// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/date/locale dojo/number esri/lang dojo/data/ItemFileWriteStore jimu/utils moment/moment".split(" "),function(y,m,n,x,w,v,z,k,u){var p=y([],{_stringFieldType:"esriFieldTypeString",_dateFieldType:"esriFieldTypeDate",_numberFieldTypes:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],_supportFieldTypes:[],dayInMS:864E5,HourInMS:36E5,MinuteInMS:6E4,SecInMS:1E3,fieldsStore:null,
isHosted:!1,constructor:function(){String.prototype.startsWith=function(a){return 0===this.indexOf(a)};String.prototype.endsWith=function(a){return this.substring(this.length-a.length)===a};String.prototype.count=function(a){return this.split(a).length-1};String.prototype.trim||(String.prototype.trim=m.trim);this._supportFieldTypes=[];this._supportFieldTypes.push(this._stringFieldType);this._supportFieldTypes.push(this._dateFieldType);this._supportFieldTypes=this._supportFieldTypes.concat(this._numberFieldTypes);
this.filterBuilderNls=window.jimuNls.filterBuilder},OPERATORS:{stringOperatorIs:"stringOperatorIs",stringOperatorIsNot:"stringOperatorIsNot",stringOperatorStartsWith:"stringOperatorStartsWith",stringOperatorEndsWith:"stringOperatorEndsWith",stringOperatorContains:"stringOperatorContains",stringOperatorDoesNotContain:"stringOperatorDoesNotContain",stringOperatorIsAnyOf:"stringOperatorIsAnyOf",stringOperatorIsNoneOf:"stringOperatorIsNoneOf",stringOperatorIsBlank:"stringOperatorIsBlank",stringOperatorIsNotBlank:"stringOperatorIsNotBlank",
numberOperatorIs:"numberOperatorIs",numberOperatorIsNot:"numberOperatorIsNot",numberOperatorIsAtLeast:"numberOperatorIsAtLeast",numberOperatorIsLessThan:"numberOperatorIsLessThan",numberOperatorIsAtMost:"numberOperatorIsAtMost",numberOperatorIsGreaterThan:"numberOperatorIsGreaterThan",numberOperatorIsBetween:"numberOperatorIsBetween",numberOperatorIsNotBetween:"numberOperatorIsNotBetween",numberOperatorIsAnyOf:"numberOperatorIsAnyOf",numberOperatorIsNoneOf:"numberOperatorIsNoneOf",numberOperatorIsBlank:"numberOperatorIsBlank",
numberOperatorIsNotBlank:"numberOperatorIsNotBlank",dateOperatorIsOn:"dateOperatorIsOn",dateOperatorIsNotOn:"dateOperatorIsNotOn",dateOperatorIsBefore:"dateOperatorIsBefore",dateOperatorIsAfter:"dateOperatorIsAfter",dateOperatorIsOnOrBefore:"dateOperatorIsOnOrBefore",dateOperatorIsOnOrAfter:"dateOperatorIsOnOrAfter",dateOperatorIsBetween:"dateOperatorIsBetween",dateOperatorIsNotBetween:"dateOperatorIsNotBetween",dateOperatorIsBlank:"dateOperatorIsBlank",dateOperatorIsNotBlank:"dateOperatorIsNotBlank",
dateOperatorInTheLast:"dateOperatorInTheLast",dateOperatorNotInTheLast:"dateOperatorNotInTheLast",dateOperatorIsIn:"dateOperatorIsIn",dateOperatorIsNotIn:"dateOperatorIsNotIn",dateOperatorMinutes:"dateOperatorMinutes",dateOperatorHours:"dateOperatorHours",dateOperatorDays:"dateOperatorDays",dateOperatorWeeks:"dateOperatorWeeks",dateOperatorMonths:"dateOperatorMonths",dateOperatorYears:"dateOperatorYears"},prepare:function(a,b){this.isHosted=k.isHostedService(a);b=b||[];this.setFieldsStoreByFieldInfos(b)},
isPartsObjHasError:function(a){var b=!1;a&&(b=a.parts&&0<=a.parts.length?n.every(a.parts,m.hitch(this,function(c){return c.parts?0<c.parts.length?n.every(c.parts,m.hitch(this,function(e){return!e.error})):!1:!c.error})):!1);return!b},isAskForValues:function(a){return p.isAskForValues(a)},hasVirtualDate:function(a){return p.hasVirtualDate(a)},setFieldsStoreByFieldInfos:function(a){a=n.filter(a,m.hitch(this,function(b){return 0<=this._supportFieldTypes.indexOf(b.type)}));a=n.map(a,function(b,c){switch(b.type){case "esriFieldTypeString":var e=
"string";break;case "esriFieldTypeDate":e="date";break;default:e="number"}return{id:c,label:b.name,shortType:e,alias:b.alias,editable:b.editable,name:b.name,nullable:b.nullable,type:b.type}},this);this.fieldsStore=new z({data:{identifier:"id",label:"label",items:a}});return a.length},_validatePartsObj:function(a){return a&&"object"===typeof a},_isObject:function(a){return a&&"object"===typeof a},_isString:function(a){return a&&"string"===typeof a},containsNonLatinCharacter:function(a){for(var b=0;b<
a.length;b++)if(255<a.charCodeAt(b))return!0;return!1},isBigDataLayer:function(a){return!!a.url&&-1!==a.url.indexOf("BigDataCatalogServer")&&("featureClass"===a.type||"table"===a.type)},useStandardizedQueries:function(a){return a?10.2<=a.version&&(a.useStandardizedQueries||this.isBigDataLayer(a)):!this.isHosted},getExprByFilterObj:function(a){if(!n.every(a.parts,function(h){return!!h}))return null;if(!this.isPartsObjReadyToBuild(a))return a.expr="",a.displaySQL="",a.expr;this._handleVirtualDate(a);
var b="",c="",e;if(0===a.parts.length)c=b="1\x3d1";else if(1===a.parts.length){var d=a.parts[0];d.valueObj&&m.isArray(d.valueObj.value)&&"multiple"!==d.valueObj.type?(e=this._checkIfValObjArrayAndChecked(d.valueObj.value))?(b=this.builtFilterString(d),c=d.displaySQL):c=b="1\x3d1":(b=this.builtFilterString(d),c=d.displaySQL)}else for(var f="",g=0;g<a.parts.length;g++){d=a.parts[g];d.valueObj&&m.isArray(d.valueObj.value)&&"multiple"!==d.valueObj.type?(e=this._checkIfValObjArrayAndChecked(d.valueObj.value))?
(e=this.builtFilterString(d),d=d.displaySQL):d=e="1\x3d1":(e=this.builtFilterString(d),d=d.displaySQL);if(!v.isDefined(e))return null;b+=f+"("+e+")";c+=f+"("+d+")";f=f||" "+a.logicalOperator+" "}a.expr=b;a.displaySQL=c;return b},_checkIfValObjArrayAndChecked:function(a){var b=!1,c;for(c in a)if(a[c].isChecked){b=!0;break}return b},_handleVirtualDate:function(a){this.hasVirtualDate(a)&&n.forEach(a.parts,m.hitch(this,function(b){b.parts?n.forEach(b.parts,m.hitch(this,function(c){this._updateRealDateByVirtualDate(c)})):
this._updateRealDateByVirtualDate(b)}))},_updateRealDateByVirtualDate:function(a){var b=[this.OPERATORS.dateOperatorIsOn,this.OPERATORS.dateOperatorIsNotOn,this.OPERATORS.dateOperatorIsBefore,this.OPERATORS.dateOperatorIsAfter,this.OPERATORS.dateOperatorIsOnOrBefore,this.OPERATORS.dateOperatorIsOnOrAfter];a.valueObj.virtualDate?a.operator===this.OPERATORS.dateOperatorIsIn||a.operator===this.OPERATORS.dateOperatorIsNotIn?(b=p.getRealDateByVirtualDate(a.valueObj.virtualDate),a.value1=b[0],a.value2=
b[1],a.valueObj.value1=k.getDateTimeStr(b[0]),a.valueObj.value2=k.getDateTimeStr(b[1])):-1<b.indexOf(a.operator)&&(b=p.getRealDateByVirtualDate(a.valueObj.virtualDate),a.value=b,a.valueObj.value=k.getDateTimeStr(b)):(a.valueObj.virtualDate1&&(b=p.getRealDateByVirtualDate(a.valueObj.virtualDate1),a.value1=b,a.valueObj.value1=k.getDateTimeStr(b)),a.valueObj.virtualDate2&&(b=p.getRealDateByVirtualDate(a.valueObj.virtualDate2),a.value2=b,a.valueObj.value2=k.getDateTimeStr(b)))},isPartsObjReadyToBuild:function(a){return n.every(a.parts,
m.hitch(this,function(b){return b.parts?n.every(b.parts,m.hitch(this,function(c){return this._isPartReadyToBuild(c)})):this._isPartReadyToBuild(b)}))},_isPartReadyToBuild:function(a){var b=a.fieldObj.shortType,c=a.operator,e=a.valueObj;a=e.type||"value";var d=e.value,f=e.value1;e=e.value2;if("value"===a){if("string"===b)return c===this.OPERATORS.stringOperatorIsBlank||c===this.OPERATORS.stringOperatorIsNotBlank?!0:k.isNotEmptyString(d);if("number"===b)return c===this.OPERATORS.numberOperatorIsBlank||
c===this.OPERATORS.numberOperatorIsNotBlank?!0:c===this.OPERATORS.numberOperatorIsBetween||c===this.OPERATORS.numberOperatorIsNotBetween?k.isValidNumber(f)&&k.isValidNumber(e):k.isValidNumber(d);if("date"===b)return c===this.OPERATORS.dateOperatorIsBlank||c===this.OPERATORS.dateOperatorIsNotBlank?!0:c===this.OPERATORS.dateOperatorIsBetween||c===this.OPERATORS.dateOperatorIsNotBetween||c===this.OPERATORS.dateOperatorIsIn||c===this.OPERATORS.dateOperatorIsNotIn?k.isNotEmptyString(f)&&k.isNotEmptyString(e):
c===this.OPERATORS.dateOperatorInTheLast||c===this.OPERATORS.dateOperatorNotInTheLast?void 0!==d&&null!==d:k.isNotEmptyString(d)}else{if("field"===a)return k.isNotEmptyString(d);if("unique"===a){if("string"===b)return k.isNotEmptyString(d);if("number"===b)return k.isValidNumber(d);if("date"===b)return k.isValidDate(d)}else if("multiple"===a){if("string"===b)return k.isNotEmptyStringArray(d);if("number"===b)return k.isValidNumberArray(d)}else if("values"!==a&&("uniquePredefined"===a||"multiplePredefined"===
a)){if("string"===b)return k.isNotEmptyStringArray(d);if("number"===b)return k.isValidNumberArray(d)}}return!1},builtFilterString:function(a){var b="",c="";if(a.parts)for(var e="",d=0;d<a.parts.length;d++){var f=a.parts[d],g=this.builtSingleFilterString(f);f.expr=g.whereClause;if(!v.isDefined(g.whereClause))return null;b+=e+g.whereClause;c+=e+f.displaySQL;e=" "+a.logicalOperator+" "}else a&&a.valueObj&&"multiple"===a.valueObj.type&&0===a.valueObj.value.length?b=c="1\x3d1":(b=this.builtSingleFilterString(a).whereClause,
c=a.displaySQL);a.expr=b;a.displaySQL=c;return b},_preBuiltSingleFilterString:function(a){if("string"===a.fieldObj.shortType&&"\x3cNull\x3e"===a.valueObj.value){if(a.operator===this.OPERATORS.stringOperatorIs)return{whereClause:a.fieldObj.name+" IS NULL"};if(a.operator===this.OPERATORS.stringOperatorIsNot)return{whereClause:a.fieldObj.name+" IS NOT NULL"}}if("number"===a.fieldObj.shortType&&"\x3cNull\x3e"===a.valueObj.value){if(a.operator===this.OPERATORS.numberOperatorIs)return{whereClause:a.fieldObj.name+
" IS NULL"};if(a.operator===this.OPERATORS.numberOperatorIsNot)return{whereClause:a.fieldObj.name+" IS NOT NULL"}}return null},_handlePrefixStringsForIn:function(a,b){for(var c=[],e=0;e<a.length;e++){var d=a[e];d=d.replace(/'/g,"''");var f=this.isHosted&&this.containsNonLatinCharacter(d)?"N":"";d=b||this.isHosted?d:d.toUpperCase();d=""+f+"'"+d+"'";c.push(d)}return c.join(",")},builtSingleFilterString:function(a){this.isHosted&&(a.caseSensitive=!1);if(v.isDefined(a.valueObj.isValid)&&!a.valueObj.isValid)return{whereClause:null};
var b=this._preBuiltSingleFilterString(a);if(b)return b;b=a.valueObj.value;var c=a.valueObj.value1,e=a.valueObj.value2,d="",f="",g=[];if("string"===a.fieldObj.shortType){c="";b&&"field"!==a.valueObj.type&&this.isHosted&&!m.isArray(b)&&this.containsNonLatinCharacter(b)&&(c="N");!b||"multiplePredefined"!==a.valueObj.type&&"uniquePredefined"!==a.valueObj.type||(g=[],n.forEach(b,m.hitch(this,function(l){l.isChecked&&g.push(l.value)})),a.operator===this.OPERATORS.stringOperatorIs||a.operator===this.OPERATORS.stringOperatorIsNot?
(b=g[0],this.isHosted&&this.containsNonLatinCharacter(b)&&(c="N")):b=g);var h=[];switch(a.operator){case this.OPERATORS.stringOperatorIs:d="field"===a.valueObj.type?a.fieldObj.name+" \x3d "+b:a.caseSensitive||this.isHosted?a.fieldObj.name+" \x3d "+c+"'"+b.replace(/'/g,"''")+"'":"UPPER("+a.fieldObj.name+") \x3d "+c+"'"+b.replace(/'/g,"''").toUpperCase()+"'";break;case this.OPERATORS.stringOperatorIsNot:d="field"===a.valueObj.type?a.fieldObj.name+" \x3c\x3e "+b:a.caseSensitive||this.isHosted?a.fieldObj.name+
" \x3c\x3e "+c+"'"+b.replace(/'/g,"''")+"'":"UPPER("+a.fieldObj.name+") \x3c\x3e "+c+"'"+b.replace(/'/g,"''").toUpperCase()+"'";break;case this.OPERATORS.stringOperatorStartsWith:h=[];"multiplePredefined"===a.valueObj.type||"uniquePredefined"===a.valueObj.type?(n.forEach(b,m.hitch(this,function(l){var q=this.isHosted&&this.containsNonLatinCharacter(l)?"N":"";a.caseSensitive||this.isHosted?h.push(a.fieldObj.name+" LIKE "+q+"'"+l.replace(/'/g,"''")+"%'"):h.push("UPPER("+a.fieldObj.name+") LIKE "+q+
"'"+l.replace(/'/g,"''").toUpperCase()+"%'")})),d="(("+h.join(") OR (")+"))"):d=a.caseSensitive||this.isHosted?a.fieldObj.name+" LIKE "+c+"'"+b.replace(/'/g,"''")+"%'":"UPPER("+a.fieldObj.name+") LIKE "+c+"'"+b.replace(/'/g,"''").toUpperCase()+"%'";break;case this.OPERATORS.stringOperatorEndsWith:h=[];"multiplePredefined"===a.valueObj.type||"uniquePredefined"===a.valueObj.type?(n.forEach(b,m.hitch(this,function(l){var q=this.isHosted&&this.containsNonLatinCharacter(l)?"N":"";a.caseSensitive||this.isHosted?
h.push(a.fieldObj.name+" LIKE "+q+"'%"+l.replace(/'/g,"''")+"'"):h.push("UPPER("+a.fieldObj.name+") LIKE "+q+"'%"+l.replace(/'/g,"''").toUpperCase()+"'")})),d="(("+h.join(") OR (")+"))"):d=a.caseSensitive||this.isHosted?a.fieldObj.name+" LIKE "+c+"'%"+b.replace(/'/g,"''")+"'":"UPPER("+a.fieldObj.name+") LIKE "+c+"'%"+b.replace(/'/g,"''").toUpperCase()+"'";break;case this.OPERATORS.stringOperatorContains:h=[];"multiplePredefined"===a.valueObj.type||"uniquePredefined"===a.valueObj.type?(n.forEach(b,
m.hitch(this,function(l){var q=this.isHosted&&this.containsNonLatinCharacter(l)?"N":"";a.caseSensitive||this.isHosted?h.push(a.fieldObj.name+" LIKE "+q+"'%"+l.replace(/'/g,"''")+"%'"):h.push("UPPER("+a.fieldObj.name+") LIKE "+q+"'%"+l.replace(/'/g,"''").toUpperCase()+"%'")})),d="(("+h.join(") OR (")+"))"):d=a.caseSensitive||this.isHosted?a.fieldObj.name+" LIKE "+c+"'%"+b.replace(/'/g,"''")+"%'":"UPPER("+a.fieldObj.name+") LIKE "+c+"'%"+b.replace(/'/g,"''").toUpperCase()+"%'";break;case this.OPERATORS.stringOperatorDoesNotContain:h=
[];"multiplePredefined"===a.valueObj.type||"uniquePredefined"===a.valueObj.type?(n.forEach(b,m.hitch(this,function(l){var q=this.isHosted&&this.containsNonLatinCharacter(l)?"N":"";a.caseSensitive||this.isHosted?h.push(a.fieldObj.name+" NOT LIKE "+q+"'%"+l.replace(/'/g,"''")+"%'"):h.push("UPPER("+a.fieldObj.name+") NOT LIKE "+q+"'%"+l.replace(/'/g,"''").toUpperCase()+"%'")})),d="(("+h.join(") AND (")+"))"):d=a.caseSensitive||this.isHosted?a.fieldObj.name+" NOT LIKE "+c+"'%"+b.replace(/'/g,"''")+"%'":
"UPPER("+a.fieldObj.name+") NOT LIKE "+c+"'%"+b.replace(/'/g,"''").toUpperCase()+"%'";break;case this.OPERATORS.stringOperatorIsAnyOf:b=this._handlePrefixStringsForIn(b,a.caseSensitive);d=a.caseSensitive||this.isHosted?a.fieldObj.name+" IN ("+b+")":"UPPER("+a.fieldObj.name+") IN ("+b+")";break;case this.OPERATORS.stringOperatorIsNoneOf:b=this._handlePrefixStringsForIn(b,a.caseSensitive);d=a.caseSensitive||this.isHosted?a.fieldObj.name+" NOT IN ("+b+")":"UPPER("+a.fieldObj.name+") NOT IN ("+b+")";
break;case this.OPERATORS.stringOperatorIsBlank:d=a.fieldObj.name+" IS NULL";break;case this.OPERATORS.stringOperatorIsNotBlank:d=a.fieldObj.name+" IS NOT NULL"}}else if("number"===a.fieldObj.shortType)switch(!b||"uniquePredefined"!==a.valueObj.type&&"multiplePredefined"!==a.valueObj.type?b&&"multiple"===a.valueObj.type&&(b=b.join(",")):(g=[],n.forEach(b,m.hitch(this,function(l){l.isChecked&&g.push(l.value)})),b=g.join(",")),a.operator){case this.OPERATORS.numberOperatorIs:d=a.fieldObj.name+" \x3d "+
b;break;case this.OPERATORS.numberOperatorIsNot:d=a.fieldObj.name+" \x3c\x3e "+b;break;case this.OPERATORS.numberOperatorIsAtLeast:d=a.fieldObj.name+" \x3e\x3d "+b;break;case this.OPERATORS.numberOperatorIsLessThan:d=a.fieldObj.name+" \x3c "+b;break;case this.OPERATORS.numberOperatorIsAtMost:d=a.fieldObj.name+" \x3c\x3d "+b;break;case this.OPERATORS.numberOperatorIsGreaterThan:d=a.fieldObj.name+" \x3e "+b;break;case this.OPERATORS.numberOperatorIsAnyOf:d=a.fieldObj.name+" IN ("+b+")";break;case this.OPERATORS.numberOperatorIsNoneOf:d=
a.fieldObj.name+" NOT IN ("+b+")";break;case this.OPERATORS.numberOperatorIsBetween:d=a.fieldObj.name+" BETWEEN "+c+" AND "+e;break;case this.OPERATORS.numberOperatorIsNotBetween:d=a.fieldObj.name+" NOT BETWEEN "+c+" AND "+e;break;case this.OPERATORS.numberOperatorIsBlank:d=a.fieldObj.name+" IS NULL";break;case this.OPERATORS.numberOperatorIsNotBlank:d=a.fieldObj.name+" IS NOT NULL"}else{f=a._useStandardizedQueries;"field"!==a.valueObj.type&&(b&&(b=k.getDateByDateTimeStr(b)),c&&(c=k.getDateByDateTimeStr(c)),
e&&(e=k.getDateByDateTimeStr(e)));var r=a.valueObj.enableTime,t=a.valueObj.timeAccuracy;switch(a.operator){case this.OPERATORS.dateOperatorIsOn:"field"===a.valueObj.type?d=a.fieldObj.name+" \x3d "+b:(d="unique"===a.valueObj.type?this._getEndDateByTimeForUnique(b,a.fieldObj.dateFormat):this._getEndDateByTime(b,r,t),d="("+a.fieldObj.name+" BETWEEN "+(f?"timestamp ":"")+"'"+this.formatDate(b)+"' AND "+(f?"timestamp ":"")+"'"+d+"') AND ("+a.fieldObj.name+" \x3c\x3e "+(f?"timestamp ":"")+"'"+d+"')");break;
case this.OPERATORS.dateOperatorIsNotOn:"field"===a.valueObj.type?d=a.fieldObj.name+" \x3c\x3e "+b:(d="unique"===a.valueObj.type?this._getEndDateByTimeForUnique(b,a.fieldObj.dateFormat):this._getEndDateByTime(b,r,t),d="("+a.fieldObj.name+" \x3c "+(f?"timestamp ":"")+"'"+this.formatDate(b)+"') OR ("+a.fieldObj.name+" \x3e\x3d "+(f?"timestamp ":"")+"'"+d+"')");break;case this.OPERATORS.dateOperatorIsBefore:d="field"===a.valueObj.type?a.fieldObj.name+" \x3c "+b:a.fieldObj.name+" \x3c "+(f?"timestamp ":
"")+"'"+this.formatDate(b)+"'";break;case this.OPERATORS.dateOperatorIsAfter:"field"===a.valueObj.type?d=a.fieldObj.name+" \x3e "+b:(d="unique"===a.valueObj.type?this._getEndDateByTimeForUnique(b,a.fieldObj.dateFormat):this._getEndDateByTime(b,r,t),d=a.fieldObj.name+" \x3e\x3d "+(f?"timestamp ":"")+"'"+d+"'");break;case this.OPERATORS.dateOperatorIsOnOrBefore:"field"===a.valueObj.type?d=a.fieldObj.name+" \x3c\x3d "+b:(d="unique"===a.valueObj.type?this._getEndDateByTimeForUnique(b,a.fieldObj.dateFormat):
this._getEndDateByTime(b,r,t),d=a.fieldObj.name+" \x3c "+(f?"timestamp ":"")+"'"+d+"'");break;case this.OPERATORS.dateOperatorIsOnOrAfter:d="field"===a.valueObj.type?a.fieldObj.name+" \x3e\x3d "+b:a.fieldObj.name+" \x3e\x3d "+(f?"timestamp ":"")+"'"+this.formatDate(b)+"'";break;case this.OPERATORS.dateOperatorInTheLast:d=a.fieldObj.name+" BETWEEN CURRENT_TIMESTAMP - "+this._convertRangeToDays(a.valueObj.value,a.valueObj.range)+" AND CURRENT_TIMESTAMP";break;case this.OPERATORS.dateOperatorNotInTheLast:d=
a.fieldObj.name+" NOT BETWEEN CURRENT_TIMESTAMP - "+this._convertRangeToDays(a.valueObj.value,a.valueObj.range)+" AND CURRENT_TIMESTAMP";break;case this.OPERATORS.dateOperatorIsBetween:case this.OPERATORS.dateOperatorIsIn:d=this._getEndDateByTime(e,a.valueObj.enableTime2,a.valueObj.timeAccuracy2);d="("+a.fieldObj.name+" BETWEEN "+(f?"timestamp ":"")+"'"+this.formatDate(c)+"' AND "+(f?"timestamp ":"")+"'"+d+"') AND ("+a.fieldObj.name+" \x3c\x3e "+(f?"timestamp ":"")+"'"+d+"')";break;case this.OPERATORS.dateOperatorIsNotBetween:case this.OPERATORS.dateOperatorIsNotIn:d=
this._getEndDateByTime(e,a.valueObj.enableTime2,a.valueObj.timeAccuracy2);d="("+a.fieldObj.name+" \x3c "+(f?"timestamp ":"")+"'"+this.formatDate(c)+"') OR ("+a.fieldObj.name+" \x3e\x3d "+(f?"timestamp ":"")+"'"+d+"')";break;case this.OPERATORS.dateOperatorIsBlank:d=a.fieldObj.name+" IS NULL";break;case this.OPERATORS.dateOperatorIsNotBlank:d=a.fieldObj.name+" IS NOT NULL"}}"date"===a.fieldObj.shortType?(b=m.clone(a.valueObj),b.dateFormat=a.fieldObj.dateFormat,f=this.getDisplaySQL(a.fieldObj.name,
b,a.operator)):f=d;a.displaySQL=f;return{whereClause:d}},_getEndDateByTime:function(a,b,c){a=b?"s"===c?this.addSec(a):"m"===c?this.addMinute(a):this.addHour(a):this.addDay(a);return this.formatDate(a)},_getEndDateByTimeForUnique:function(a,b){a=b&&0<=b.indexOf("ShortTime")?this.addMinute(a):b&&0<=b.indexOf("LongTime")?this.addSec(a):this.addDay(a);return this.formatDate(a)},_getDisplayDates:function(a){var b={value:a.virtualDate,value1:a.virtualDate1,value2:a.virtualDate2},c=""===a.dateFormat?{}:
{format:{dateFormat:a.dateFormat}};b.value=""===a.virtualDate||void 0===a.virtualDate?"field"===a.type?a.value:"unique"===a.type?k.localizeDateByFieldInfo(k.getDateByDateTimeStr(a.value),c):k.localizeDateTimeByFieldInfo(k.getDateByDateTimeStr(a.value),c,a.enableTime,a.timeAccuracy):this.filterBuilderNls[a.virtualDate];b.value1=""===a.virtualDate1?k.localizeDateTimeByFieldInfo(k.getDateByDateTimeStr(a.value1),c,a.enableTime1,a.timeAccuracy1):this.filterBuilderNls[a.virtualDate1];b.value2=""===a.virtualDate2?
k.localizeDateTimeByFieldInfo(k.getDateByDateTimeStr(a.value2),c,a.enableTime2,a.timeAccuracy2):this.filterBuilderNls[a.virtualDate2];return b},getDisplaySQL:function(a,b,c){var e="";0<c.indexOf("InTheLast")?e=this.filterBuilderNls[c]+" "+b.value+" "+this._getDateRangeEnum(b.value,b.range):(b=this._getDisplayDates(b,c),e=0<c.indexOf("Between")?this.filterBuilderNls[c]+" "+b.value1+" "+this.filterBuilderNls.and+" "+b.value2:0<c.indexOf("Blank")?this.filterBuilderNls[c]:this.filterBuilderNls[c]+" "+
b.value);return a+" "+e},_getDateRangeEnum:function(a,b){b={dateOperatorYears:"year",dateOperatorDays:"day",dateOperatorMonths:"month",dateOperatorWeeks:"week",dateOperatorHours:"hour",dateOperatorMinutes:"minute"}[b];return window.jimuNls.timeUnit[1<a?b+"s":b].toLowerCase()},_convertRangeToDays:function(a,b){var c=a;b===this.OPERATORS.dateOperatorYears?c=365*a:b===this.OPERATORS.dateOperatorMonths?c=30*a:b===this.OPERATORS.dateOperatorWeeks?c=7*a:b===this.OPERATORS.dateOperatorHours?c=a/24:b===this.OPERATORS.dateOperatorMinutes&&
(c=a/1440);return c=Math.round(1E6*c)/1E6},formatDate:function(a){a=new Date(a);return""+a.getUTCFullYear()+"-"+w.format(a.getUTCMonth()+1,{pattern:"00"})+"-"+w.format(a.getUTCDate(),{pattern:"00"})+" "+w.format(a.getUTCHours(),{pattern:"00"})+":"+w.format(a.getUTCMinutes(),{pattern:"00"})+":"+w.format(a.getUTCSeconds(),{pattern:"00"})},addDay:function(a){return new Date(a.getTime()+this.dayInMS)},addHour:function(a){return new Date(a.getTime()+this.HourInMS)},addMinute:function(a){return new Date(a.getTime()+
this.MinuteInMS)},addSec:function(a){return new Date(a.getTime()+this.SecInMS)},getFilterObjByExpr:function(a){if(a&&this.fieldsStore){var b=this.replaceStrings(a);a=b.defExpr;var c=this.findParts(a,"AND");1===c.parts.length&&(c=this.findParts(a,"OR"),1===c.parts.length&&(c.logicalOperator="AND"));n.forEach(c.parts,function(e){e.expr=e.expr.trim();if(e.expr.startsWith("(")&&-1<e.expr.search(/\)$/)){var d=e.expr.substring(1,e.expr.length-1),f=d.indexOf("("),g=d.indexOf(")");if(-1===f&&-1===g||f<g)e.expr=
d}d=this.findParts(e.expr,"AND");1===d.parts.length&&(d=this.findParts(e.expr,"OR"));1<d.parts.length&&(e.parts=d.parts,e.logicalOperator=d.logicalOperator)},this);this.parseExpr(c);this.reReplaceStrings(b,c,m.hitch(this,function(){c&&c.parts&&n.forEach(c.parts,m.hitch(this,function(e){e&&(e.parts?n.forEach(e.parts,m.hitch(this,function(d){this._handleParsedValuesForSinglePart(d);this._addDefalutValueTypeForSinglePart(d)})):(this._handleParsedValuesForSinglePart(e),this._addDefalutValueTypeForSinglePart(e)))}))}));
this.isPartsObjHasError(c)&&(c=null);return c}},_handleParsedValuesForSinglePart:function(a){a&&a.fieldObj&&"number"===a.fieldObj.shortType&&a.valueObj&&(a.valueObj.hasOwnProperty("value")&&(a.valueObj.value=parseFloat(a.valueObj.value)),a.valueObj.hasOwnProperty("value1")&&(a.valueObj.value1=parseFloat(a.valueObj.value1)),a.valueObj.hasOwnProperty("value2")&&(a.valueObj.value2=parseFloat(a.valueObj.value2)))},_addDefalutValueTypeForSinglePart:function(a){a&&a.valueObj&&!a.valueObj.type&&(a.valueObj.type=
"value")},replaceStrings:function(a){for(var b=a,c=function(r,t,l){var q=-1;q=r.indexOf("'",l+1);return q===l+1?(q=r.indexOf("'",q+1),c(r,t,q)):l},e=[],d=a.indexOf("'");-1<d;){var f=d;d=a.indexOf("'",d+1);var g=0;d=c(a,f,d);"%"===a[f+1]&&f++;"%"===a[d-1]&&(--d,g++);var h=a.substring(f+1,d);"N"===a[f-1]&&(a=a.substring(0,f-1)+a.substring(f),--f,--d);this.isDateString(h)||-1!==h.indexOf("{")?d=a.indexOf("'",d+1+g):(e.push(h),a=a.substring(0,f+1)+"#"+(e.length-1)+"#"+a.substring(d),d=a.indexOf("'",a.lastIndexOf("#")+
2+g))}return{origDefExpr:b,defExpr:a,savedStrings:e}},reReplaceStrings:function(a,b,c){var e=a.savedStrings;if(!e.length)c&&"function"===typeof c&&c();else if(e.length){var d=function(g,h){if(void 0===g.valueObj||null===g.valueObj||void 0===g.valueObj.value||null===g.valueObj.value||"string"!==g.fieldObj.shortType)return!1;var r=g.valueObj.value.indexOf("#"),t=g.valueObj.value.lastIndexOf("#");return v.isDefined(g.valueObj.value)&&-1<r?(g.valueObj.value=h[parseInt(g.valueObj.value.substring(r+1,t),
10)].replace(/''/g,"'"),this.builtSingleFilterString(g),!0):!1};d=m.hitch(this,d);var f=!1;n.forEach(b.parts,function(g){if(g.parts){var h=!1;n.forEach(g.parts,function(r){h=d(r,e)||h});h&&(f=h,g.expr=this.builtFilterString(g))}else(f=d(g,e)||f)&&this.builtFilterString(g)},this);c&&"function"===typeof c&&c();f&&(b.expr=null,this.getExprByFilterObj(b))}},isDateString:function(a){return 19===a.length&&"-"===a.charAt(4)&&"-"===a.charAt(7)&&" "===a.charAt(10)&&":"===a.charAt(13)&&":"===a.charAt(16)?!0:
!1},findParts:function(a,b){for(var c=a.toLowerCase(),e=" "+b.toLowerCase()+" ",d=[],f=0,g=c.indexOf(e);0<g;){var h=a.substring(f,g),r=h.toLowerCase(),t=h.count("("),l=h.count(")"),q=h.count("'");t!==l||1===q%2?g=c.indexOf(e,g+1):-1<r.indexOf(" between ")&&-1===r.indexOf(" and ")?g=c.indexOf(e,g+1):(d.push({expr:h}),f=g+e.length,g=c.indexOf(e,f))}d.push({expr:a.substring(f)});for(c=d.length-1;0<=c;c--)!this.hasOperator(d[c].expr)&&0<c&&(d[c-1].expr+=" "+b+" "+d[c].expr,d.splice(c,1));return{expr:a,
parts:d,logicalOperator:b}},hasOperator:function(a){a=a.toLowerCase();return-1<a.indexOf("{")&&-1<a.indexOf("}")||-1<a.indexOf(" \x3d ")||-1<a.indexOf(" \x3c ")||-1<a.indexOf(" \x3e ")||-1<a.indexOf(" \x3c\x3e ")||-1<a.indexOf(" \x3c\x3d ")||-1<a.indexOf(" \x3e\x3d ")||-1<a.indexOf(" like ")||-1<a.indexOf(" between ")||-1<a.indexOf(" date")||-1<a.indexOf(" is null")||-1<a.indexOf(" is not null")?!0:!1},parseExpr:function(a){n.forEach(a.parts,function(b){b.parts?this.parseExpr(b):this.parseSingleExpr(b)},
this)},_preParseSingleExpr:function(a){var b=null;try{if(b=m.clone(a),b.expr=b.expr.trim(),/^UPPER\((.*)\)(\s+|\s+NOT\s+)LIKE\s+UPPER\(N?'(.*)'\)$/i.test(b.expr)){var c=a="",e=b.expr.match(/^UPPER\((.*)\)\s+/i);if(e&&2<=e.length)a=e[1];else return null;var d=b.expr.match(/UPPER\(N?'(.*)'\)$/i);if(d&&2<=d.length)c="'"+d[1]+"'";else return null;b.expr=b.expr.replace(/^UPPER\((.*)\)\s+/i,a+" ");b.expr=b.expr.replace(/UPPER\(N?'(.*)'\)$/i,c);b.caseSensitive=!1}else/^(.+)(\s+|\s+NOT\s+)LIKE\s+N?'(.*)'$/i.test(b.expr)&&
(b.caseSensitive=!0)}catch(f){return console.log(f),null}b&&this.isHosted&&(b.caseSensitive=!1);return b},_removeOperator:function(a,b,c){b=b.substring(c).trim();"date"===a&&!this.isHosted&&b.toLowerCase().startsWith("timestamp ")&&(b=b.substring(10).trim());return b},parseSingleExpr:function(a){var b=this._preParseSingleExpr(a);b&&(a=m.mixin(a,b));b=a.expr.trim();var c=b.indexOf(" "),e=b.substring(0,c);a.fieldObj={name:e};a.valueObj={};this.getFieldItemByName({name:e},function(d){a.fieldObj.shortType=
d.shortType[0];a.fieldObj.label=d.label[0]},function(){a.error={msg:"unknown field name ("+e+")",code:1}});b=b.substring(c+1).trim();c=b.toLowerCase();c.startsWith("\x3d ")?(b=this._removeOperator(a.fieldObj.shortType,b,2),this.storeValue(b,a),a.operator="date"===a.fieldObj.shortType?this.OPERATORS.dateOperatorIsOn:"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIs:this.OPERATORS.numberOperatorIs):c.startsWith("\x3c ")?(b=this._removeOperator(a.fieldObj.shortType,b,2),this.storeValue(b,
a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsBefore:"number"===a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsLessThan:a.error={msg:"operator ("+c+") not supported for string",code:3}):c.startsWith("\x3e ")?(b=this._removeOperator(a.fieldObj.shortType,b,2),this.storeValue(b,a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsAfter:"number"===a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsGreaterThan:a.error={msg:"operator ("+
c+") not supported for string",code:3}):c.startsWith("\x3c\x3e ")?(b=this._removeOperator(a.fieldObj.shortType,b,3),this.storeValue(b,a),a.operator="date"===a.fieldObj.shortType?this.OPERATORS.dateOperatorIsNotOn:"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIsNot:this.OPERATORS.numberOperatorIsNot):c.startsWith("\x3c\x3d ")?(b=this._removeOperator(a.fieldObj.shortType,b,3),this.storeValue(b,a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsOnOrBefore:"number"===
a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsAtMost:a.error={msg:"operator ("+c+") not supported for string",code:3}):c.startsWith("\x3e\x3d ")?(b=this._removeOperator(a.fieldObj.shortType,b,3),this.storeValue(b,a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsOnOrAfter:"number"===a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsAtLeast:a.error={msg:"operator ("+c+") not supported for string",code:3}):c.startsWith("like ")?(b=b.substring(5).trim(),
b.startsWith("N'")&&(b=b.substring(1,b.length)),b.startsWith("'%")&&b.endsWith("%'")?(this.storeValue(b.substring(2,b.length-2),a),a.operator=this.OPERATORS.stringOperatorContains):b.startsWith("'%")&&b.endsWith("'")?(this.storeValue(b.substring(2,b.length-1),a),a.operator=this.OPERATORS.stringOperatorEndsWith):b.startsWith("'")&&b.endsWith("%'")?(this.storeValue(b.substring(1,b.length-2),a),a.operator=this.OPERATORS.stringOperatorStartsWith):a.error={msg:"value ("+c+") not supported for LIKE",code:3}):
c.startsWith("not like ")?(b=b.substring(9).trim(),b.startsWith("N'")&&(b=b.substring(1,b.length)),b.startsWith("'%")&&b.endsWith("%'")?(this.storeValue(b.substring(2,b.length-2),a),a.operator=this.OPERATORS.stringOperatorDoesNotContain):a.error={msg:"value ("+c+") not supported for NOT LIKE",code:3}):c.startsWith("between ")?this._updatePartForBetween(b,!0,a):c.startsWith("not between ")?this._updatePartForBetween(b,!1,a):"is null"===c?(a.valueObj.value=null,a.operator="date"===a.fieldObj.shortType?
this.OPERATORS.dateOperatorIsBlank:"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIsBlank:this.OPERATORS.numberOperatorIsBlank):"is not null"===c?(a.valueObj.value=null,a.operator="date"===a.fieldObj.shortType?this.OPERATORS.dateOperatorIsNotBlank:"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIsNotBlank:this.OPERATORS.numberOperatorIsNotBlank):a.error={msg:"unknown operator ("+c+")",code:2};if(v.isDefined(a.valueObj.value)&&"string"===typeof a.valueObj.value&&a.valueObj.value.startsWith("{")&&
a.valueObj.value.endsWith("}")||v.isDefined(a.valueObj.value1)&&"string"===typeof a.valueObj.value1&&a.valueObj.value1.startsWith("{")&&a.valueObj.value1.endsWith("}"))a.isInteractive=!0},getFieldItemByName:function(a,b,c){this.fieldsStore.fetch({query:a,onComplete:m.hitch(this,function(e){e&&e.length?b(e[0]):c()})})},subtractDay:function(a){return new Date(a.getTime()-this.dayInMS)},_updatePartForBetween:function(a,b,c){a=this._removeOperator(c.fieldObj.shortType,a,(b?"between ":"not between ").length);
var e=a.toLowerCase().indexOf(" and ");if(-1<e){var d=a.substring(0,e).trim();if(d.startsWith("CURRENT_TIMESTAMP "))if(d=d.substring(18).trim(),d.startsWith("-")){c.operator=b?this.OPERATORS.dateOperatorInTheLast:this.OPERATORS.dateOperatorNotInTheLast;try{var f=parseFloat(d.substring(1).trim());if(1<=f){var g=this.OPERATORS.dateOperatorDays;var h=f/365;1E-4>Math.abs(h-Math.round(h))?(f=Math.round(h),g=this.OPERATORS.dateOperatorYears):(h=f/30,1E-4>Math.abs(h-Math.round(h))?(f=Math.round(h),g=this.OPERATORS.dateOperatorMonths):
(h=f/7,1E-4>Math.abs(h-Math.round(h))&&(f=Math.round(h),g=this.OPERATORS.dateOperatorWeeks)))}else g=this.OPERATORS.dateOperatorMinutes,f*=24,1E-4>Math.abs(f-Math.round(f))?g=this.OPERATORS.dateOperatorHours:f*=60;c.valueObj.value=f;c.valueObj.range=g}catch(r){c.error={msg:"missing count for '"+(b?"":"not ")+"in the last'",code:3}}}else c.error={msg:"'"+(b?"":"not ")+"in the next' not supported",code:3};else if(a=this._removeOperator(c.fieldObj.shortType,a.substring(e),5),this.storeValue1(d,c),this.storeValue2(a,
c),"date"===c.fieldObj.shortType){if(c.operator=b?this.OPERATORS.dateOperatorIsBetween:this.OPERATORS.dateOperatorIsNotBetween,"object"===typeof c.valueObj.value1&&"object"===typeof c.valueObj.value2)try{1E3>Math.abs(this.subtractDay(c.valueObj.value2).getTime()-c.valueObj.value1.getTime())&&(c.valueObj.value=c.valueObj.value1,delete c.valueObj.value1,delete c.valueObj.value2,c.operator=b?this.OPERATORS.dateOperatorIsOn:this.OPERATORS.dateOperatorIsNotOn)}catch(r){}}else"number"===c.fieldObj.shortType||
"oid"===c.fieldObj.shortType?c.operator=b?this.OPERATORS.numberOperatorIsBetween:this.OPERATORS.numberOperatorIsNotBetween:c.error={msg:c.fieldObj.shortType+" field not supported for "+(b?"":"NOT ")+"BETWEEN",code:3}}else c.error={msg:"missing AND operator for "+(b?"":"NOT ")+"BETWEEN",code:3}},storeValue:function(a,b){if(a.startsWith("{")&&a.endsWith("}"))b.valueObj.value=a;else if(a.startsWith("'{")&&a.endsWith("}'"))b.valueObj.value=a.substring(1,a.length-1);else if("date"===b.fieldObj.shortType)if(a.startsWith("'")&&
a.endsWith("'")){var c=a.substring(1,a.length-1);b.valueObj.value=this.parseDate(c)}else b.valueObj.value=a,b.valueObj.type="field";else"string"===b.fieldObj.shortType?(a.startsWith("#")||a.startsWith("%#"))&&(a.endsWith("#")||a.endsWith("#%"))?b.valueObj.value=a:a.startsWith("'")&&a.endsWith("'")?b.valueObj.value=a.substring(1,a.length-1).replace(/''/g,"'"):(b.valueObj.value=a,b.valueObj.type="field",this.getFieldItemByName({name:a},function(e){b.valueObj.label=e.label[0]},function(){b.error={msg:"unknown field name ("+
a+")",code:1}})):(b.valueObj.value=a,isNaN(a)&&(b.valueObj.type="field",this.getFieldItemByName({name:a},function(e){b.valueObj.label=e.label[0]},function(){b.error={msg:"unknown field name ("+a+")",code:1}})))},storeValue1:function(a,b){a.startsWith("{")&&a.endsWith("}")?b.valueObj.value1=a:a.startsWith("'{")&&a.endsWith("}'")?b.valueObj.value1=a.substring(1,a.length-1):"date"===b.fieldObj.shortType?a.startsWith("'")&&a.endsWith("'")?(a=a.substring(1,a.length-1),b.valueObj.value1=this.parseDate(a)):
(b.valueObj.value1=a,b.valueObj.type="field"):(b.valueObj.value1=a,isNaN(a)&&(b.valueObj.type="field"))},storeValue2:function(a,b){a.startsWith("{")&&a.endsWith("}")?b.valueObj.value2=a:a.startsWith("'{")&&a.endsWith("}'")?b.valueObj.value2=a.substring(1,a.length-1):"date"===b.fieldObj.shortType?a.startsWith("'")&&a.endsWith("'")?(a=a.substring(1,a.length-1),b.valueObj.value2=this.parseDate(a)):(b.valueObj.value2=a,b.valueObj.type="field"):(b.valueObj.value2=a,isNaN(a)&&(b.valueObj.type="field"))},
parseDate:function(a){var b=x.parse(a,{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"});b||(b=x.parse(a.replace(" ",", "),{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"}))||(b=x.parse(a.replace(" "," - "),{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"}));return b}});p.VIRTUAL_DATE_CUSTOM="custom";p.VIRTUAL_DATE_TODAY="today";p.VIRTUAL_DATE_YESTERDAY="yesterday";p.VIRTUAL_DATE_TOMORROW="tomorrow";p.VIRTUAL_DATE_THIS_WEEK="thisWeek";p.VIRTUAL_DATE_THIS_MONTH="thisMonth";p.VIRTUAL_DATE_THIS_QUARTER=
"thisQuarter";p.VIRTUAL_DATE_THIS_YEAR="thisYear";p.isAskForValues=function(a){var b=!1;return b=n.some(a.parts,function(c){return c.parts?n.some(c.parts,function(e){return!!e.interactiveObj}):!!c.interactiveObj})};p.hasVirtualDate=function(a){var b=!1;return b=n.some(a.parts,function(c){return c.parts?n.some(c.parts,function(e){return!!e.valueObj.virtualDate||!!e.valueObj.virtualDate1||!!e.valueObj.virtualDate2}):!!c.valueObj.virtualDate||!!c.valueObj.virtualDate1||!!c.valueObj.virtualDate2})};p.getRealDateByVirtualDate=
function(a){var b=null,c=new Date,e=c.getTime();switch(a){case p.VIRTUAL_DATE_TODAY:b=c;break;case p.VIRTUAL_DATE_YESTERDAY:b=new Date(e-864E5);break;case p.VIRTUAL_DATE_TOMORROW:b=new Date(e+864E5);break;case p.VIRTUAL_DATE_THIS_WEEK:b=[u().startOf("week").toDate(),u().endOf("week").toDate()];break;case p.VIRTUAL_DATE_THIS_MONTH:b=[u().startOf("month").toDate(),u().endOf("month").toDate()];break;case p.VIRTUAL_DATE_THIS_QUARTER:b=[u().startOf("quarter").toDate(),u().endOf("quarter").toDate()];break;
case p.VIRTUAL_DATE_THIS_YEAR:b=[u().startOf("year").toDate(),u().endOf("year").toDate()]}return b};return p});