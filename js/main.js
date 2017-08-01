function getQueryParams(qs) {
  qs = qs.split("+").join(" ");

  var params = {}, tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

//BELGIUM                            3
//BERKELEY BURKE                     1
//CORPAD                             1
//CRODA INTERNATIONAL PLC            2 croda
//ELECTRICITY SUPPLY BOARD           1
//FRIENDS FIRST                      2 friends_first
//HARBOUR PENSIONS                  19
//INVESCO                            7
//IRISH CEMENT                       2 irish_cement
//JOAN                               6
//KLEINWORT BENSON                  70 kleinwort_benson
//L&P FINANCIAL TRUSTEES LIMITED     3 lp
//L&P SYSTEMS                        8
//L&P SYSTEMS LIMITED                3 lp
//LIBERTY                            7
//INTERTRUST                       146 intertrust
//ASCOT LLOYD                       23 ascot_lloyd
//SOURCE                            73 source
//SOVEREIGN                         32 sovereign
//TEST                               1
//TOWERS WATSON                     40
//UNIVERSITY COLLEGE, CORK           9 ucc
//VHI                                8
//JMMB                                 jmmb

var query = getQueryParams(document.location.search);
//alert(query.client);

$('*.payroll').parent().hide();

$('.croda').parent().hide();
$('.friends_first').parent().hide();
$('.irish_cement').parent().hide();
$('.kleinwort_benson').parent().hide();
$('.lp').parent().hide();
$('.intertrust').parent().hide();
$('.sovereign').parent().hide();
$('.source').parent().hide();
$('.ascot_lloyd').parent().hide();
$('.ucc').parent().hide();
$('.vhi').parent().hide();

if (typeof query.client != 'undefined') {
  if (query.client == 'ascot_lloyd' || query.client == 'berkeley_burke' || query.client == 'corpad') {
    $('*.payroll').parent().show();
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
