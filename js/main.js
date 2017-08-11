function getQueryParams(qs) {
  qs = qs.split("+").join(" ");

  var params = {}, tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

// ASCOT LLOYD                       26
// BELGIUM                            3
// BERKELEY BURKE                    40
// CORPAD                             9
// CRODA INTERNATIONAL PLC            2
// ELECTRICITY SUPPLY BOARD           1
// ELIAN                              1
// FRIENDS FIRST                      2
// GOODBODY                         121
// HARBOUR PENSIONS                  23
// INTERTRUST                       262
// INVESCO                           30
// IRISH CEMENT                       2
// JMMB                              87
// JOAN                               6
// KLEINWORT BENSON                  70
// L&P FINANCIAL TRUSTEES LIMITED     3
// L&P SYSTEMS                        8
// L&P SYSTEMS LIMITED                3
// LIBERTY                            5
// My WorkPlace Pension              38
// NEWELL PALMER                      2
// OGIER                              1
// P F P                              1
// SOURCE                            88
// SOVEREIGN                         32
// TEST                               1
// TOWERS WATSON                     63
// UNIVERSITY COLLEGE, CORK           7
// VHI                                8

var query = getQueryParams(document.location.search);
//alert(query.client);

$('.payroll').hide();
$('li.contains(Jurisdiction Reports)').css( "border", "3px solid green" );

$('.ascot_lloyd').parent().hide();
$('.berkeley_burke').parent().hide();
$('.corpad').parent().hide();
$('.croda').parent().hide();
$('.friends_first').parent().hide();
$('.irish_cement').parent().hide();
$('.jmmb').parent().hide();
$('.kleinwort_benson').parent().hide();
$('.lp').parent().hide();
$('.intertrust').parent().hide();
$('.sovereign').parent().hide();
$('.source').parent().hide();
$('.ucc').parent().hide();
$('.vhi').parent().hide();

if (typeof query.client != 'undefined') {
  if (query.client == 'ascot_lloyd' || query.client == 'berkeley_burke' || query.client == 'corpad') {
    $('.payroll').show();
  }

  if (query.client == 'ascot_lloyd' || query.client == 'all') {
    $('.ascot_lloyd').parent().show();
  }

  if (query.client == 'berkeley_burke' || query.client == 'all') {
    $('.berkeley_burke').parent().show();
  }

  if (query.client == 'corpad' || query.client == 'all') {
    $('.corpad').parent().show();
  }

  if (query.client == 'croda' || query.client == 'all') {
    $('.croda').parent().show();
  }

  if (query.client == 'friends_first' || query.client == 'all') {
    $('.friends_first').parent().show();
  }

  if (query.client == 'irish_cement' || query.client == 'all') {
    $('.irish_cement').parent().show();
  }

  if (query.client == 'jmmb' || query.client == 'all') {
    $('.jmmb').parent().show();
  }

  if (query.client == 'kleinwort_benson' || query.client == 'all') {
    $('.kleinwort_benson').parent().show();
  }

  if (query.client == 'lp' || query.client == 'all') {
    $('.lp').parent().show();
  }

  if (query.client == 'intertrust' || query.client == 'all') {
    $('.intertrust').parent().show();
  }

  if (query.client == 'sovereign' || query.client == 'all') {
    $('.sovereign').parent().show();
  }

  if (query.client == 'source' || query.client == 'all') {
    $('.source').parent().show();
  }

  if (query.client == 'ascot_lloyd' || query.client == 'all') {
    $('.ascot_lloyd').parent().show();
  }

  if (query.client == 'ucc' || query.client == 'all') {
    $('.ucc').parent().show();
  }

  if (query.client == 'vhi' || query.client == 'all') {
    $('.vhi').parent().show();
  }
}
