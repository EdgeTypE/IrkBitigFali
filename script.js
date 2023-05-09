let usedDice = [];

function rollDice(dice) {
  if (usedDice.includes(dice)) {
      return;
  }
  usedDice.push(dice);
  let number = Math.floor(Math.random() * 4) + 1;
  document.getElementById("dice" + dice).innerHTML = number;
  let diceValue = number;
  calculateResult();
}



function getLetter(number) {
    switch (number) {
      case 1:
        return "1";
      case 2:
        return "2";
      case 3:
        return "3";
      case 4:
        return "4";
      default:
        return "-";
    }
  }
  

function calculateResult() {
    let dice1 = parseInt(document.getElementById("dice1").innerHTML);
    let dice2 = parseInt(document.getElementById("dice2").innerHTML);
    let dice3 = parseInt(document.getElementById("dice3").innerHTML);
    let total = dice1 + dice2 + dice3;
    document.getElementById("result").innerHTML = "Sonuç: " + total;
    let atis1 = getLetter(dice1);
    let atis2 = getLetter(dice2);
    let atis3 = getLetter(dice3);
    let letters = atis1 + " " + atis2 + " " + atis3;
    document.getElementById("result").innerHTML += "<br>Harfler: " + letters;
    if (atis1 == "2" && atis2 == "2" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>“Tanrı’nın oğluyum, hakanım. Gece gündüz altın tahtta oturup eğlenirim.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "3" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Altın kanatlı kara kartalım. Daha bedenimin tüyleri büyümemişken, denizin kenarında ne istersem yakalar yerim. Bu kadar güçlüyüm.”, demiş. Bilin ki bu iyidir. İYİ";
   
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Alaca atlı yol tanrısıyım. Sabah akşam yürürüm.”, demiş. Bu tanrının karşısına iki güler yüzlü kişi çıkmış. Yol tanrısından korkmuşlar. Yol tanrısı “Korkmayın, ben sizi kutsarım.”, demiş. Bilin ki bu iyidir. iyi";
   
    } else if (atis1 == "1" && atis2 == "1" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>“Beyaz alacalı doğan kuşuyum. Sandal ağacı üzerinde oturup eğlenirim.”, demiş. Bilin ki bu..";
  
    } else if (atis1 == "2" && atis2 == "4" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Bey kişi atlarına varmış, görmüş ki ak kısrağı tay doğurmuş. “Ona altın damgalı aygırlık yaraşır.” demiş. Develerine varmış, görmüş ki ak devesi yavrulamış. “Ona altın burunluklu buğralık yakışır.” demiş. Evine gelmiş, görmüş ki üçüncü eşi bir oğlan doğurmuş. “Ona beylik yaraşır.” demiş. Bu kişi mutlu bir beymiş. Bilin ki bu çok iyidir.' ÇOKİYİ";
   
    } else if (atis1 == "1" && atis2 == "2" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Ayı ile domuz dağ geçidinde kapışmışlar. Ayının karnı yarılmış, domuzun uzun dişleri kırılmış. Bilin ki bu kötüdür.";
    } else if (atis1 == "2" && atis2 == "1" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Bir kişi koşarak gelmiş, iyi haberler getirmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "2" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Altın başlı yılanım. Altın kursağımı bıçakla kesip; beni inimden, başımı bedenimden çıkar.”, demiş. Bilin ki bu kötüdür.";
    } else if (atis1 == "3" && atis2 == "2" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Büyük bir ev yanmış. Köşesine bucağına kadar hiçbir şeyi kalmamış. Bilin ki bu kötüdür.";
    } else if (atis1 == "2" && atis2 == "4" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Esneyen parsım. Kamışlar arasında başım. Bu kadar yiğit ve güçlüyüm.”, demiş. Bilin ki bu...";
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Elçi sarı atı üstünde, temsilci kahve atı üstünde iyi haberler getirmiş. Bilin ki bu çok iyidir.";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Bir kişi ava gitmiş. Orada yığılıp düşmüş ve “Güçlü tanrı göktedir!”, demiş. Bilin ki bu kötüdür.";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Dindar yaşlı bir kadın terk edilmiş bir çadırda kalmış. Yağlı kaşığın kenarını yalayıp hayatta kalmış, ölümden kurtulmuş. Bilin ki bu...";
    } else if (atis1 == "2" && atis2 == "3" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Kuzgun ağaca bağlanmış. “Sıkıca bağla, iyice bağla.”, demiş. Bilin ki bu...";   
   
    } else if (atis1 == "2" && atis2 == "1" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Zayıf bir at semizleşmiş. Başka yer düşleyip koşup gitmiş. Karşıda bir yerde bir hırsıza rast gelmiş. Hırsız, yakalayıp ona binmiş. Yelesinden kuyruğuna kadar yaralanmış. Bilin ki bu kötüdür.";
    } else if (atis1 == "2" && atis2 == "3" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Bir binek atı çölde yorgun argın kalakalmış. Tanrının kudretiyle dağın üzerinde yol ve su görmüş, çayırlıkta taze ot görmüş. Yürüyerek gidip, su içip taze ot yiyip ölümden kurtulmuş. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "4" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Çadırın çerçevesi nasıldır? Bacası, penceresi nasıldır? Manzaralıdır. Çatısı nasıldır? İyidir. İpleri nasıldır? Hepsi vardır. Bilin ki bu çok iyidir.";
    } else if (atis1 == "4" && atis2 == "1" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Ak bir at üç bölükte rakibini seçmiş, dua etmek için sessizliğe çekilmiş. “Korkma, iyi dua et, endişe etme, iyice yalvar.”, demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "2" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Dişi deve aygırıyım. Beyaz köpüğümü saçarım. Yukarıda göğe çıkar, aşağıda yere girerim. Uyuyanı uyandırarak, yatanı kaldırarak yürürüm. Bu kadar güçlüyüm.”, demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "3" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Bir hüthüt kuşu yeni yıl girmeden şakımış. “Heyecanlanma, ona bakma ve onu korkutma.”, demiş. Bilin ki bu..";
    
   
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Bir oğlan kartal gübresi bulmuş. Toprağa: “Yemeğin mübarek olsun.”, demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "1" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Kör bir tay, bir aygırın altında meme aramış. “Gün ortasında kaybedersen gece yarısı nasıl bulursun?”, demiş. Bilin ki bu kötüdür.";
    } else if (atis1 == "3" && atis2 == "1" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Bir kişi iki öküzü bir sabana bağlamış. Öküzler öylece kalakalmış. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "2" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Şafak sökmüş, yer aydınlanmış, güneş çıkmış, ışık her yere parlamış. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "2" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Zengin bir kişinin koyunu korkup kaçmış. Kurda rastlamış. Kurdun ağzı acımış, koyun da kurtulup kaçmış. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "1" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Bir han tahta geçip ülke kurmuş. Dört bir yandan iyi ve becerikli kişileri toplamış. Ülkesi kalkınmış ve güçlenmiş. Sevinmiş ve sarayını bezemiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "3" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Bir kişi, kadınlarını ve oğullarını tehlikede bırakıp kurbanlık hayvanların içini boşaltmak için gitmiş. Ailesine hiçbir şey olmamış, üstüne birde doksan başıboş koyun bulmuş. Oğulları ve eşleri hep beraber sevinmiş. Bilin ki bu iyidir.";
    

    } else if (atis1 == "4" && atis2 == "2" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Fakir bir kişinin oğlu para kazanmaya gitmiş. Yolculuğu başarılı olmuş. Sevinerek geri gelmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Bir pars ava çıkmış. Avını bulmuş. Sevinerek inine gelmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "1" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Bir gül yüz olmuş. Yüz gül bin olmuş. Bin gül on bin olmuş. Bilin ki bu faydalıdır, iyidir.";
    } else if (atis1 == "4" && atis2 == "2" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Bir kişi suya keçe koymuş. “İyice vur, sıkıca bağla!”, demiş. Bilin ki bu kötüdür.";
    } else if (atis1 == "2" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Bir han savaşa gitmiş düşmanını yenmiş. Erlerine, nereye isterseler yerleşmelerine izin vermiş. Kendisi ve erleri ülkeye sevinerek geri dönmüş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "3" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Bir er savaşa gitmiş. Dönerken yolda atı yorulup hastalanmış. Sonra bir kuğuya rast gelmiş. Kuğu onu kanatlarına almış, onu anasına babasına ulaştırmış. Anası babası memnun olup sevinmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "1" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Unvanlı sevincin yok. Kötü itibar korkun yok. Bayraklar asarak kutlanacak bir kısmetin yok. Bilin ki bu çok kötüdür.";
    } else if (atis1 == "1" && atis2 == "3" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Yaşlı bir öküzü; karıncalar, belini biçerek yemiş. Öküz, hareketsiz öylece kalakalmış. Bilin ki bu kötüdür.";
        


    } else if (atis1 == "3" && atis2 == "1" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Bir köle kız kamışlar arasında yalnız kalmış. Tanrı bundan hoşlanmamış ve “Bu köle kız hatun olsun!”, demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "2" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Demir kırı bir atın ayaklarını çapraz kösteklemişler. At kımıldayamadan kalakalmış. Bilin ki bu kötüdür.";
    } else if (atis1 == "4" && atis2 == "4" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Omuzları açık cesur bir genç, tek başına, okunun ucu ile yalçın kayaları yara yara yürümüş. Bu genç böylesine güçlüymüş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "2" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Ak benekli bir inek doğurmak üzereymiş. “Öleceğim galiba!”, demiş; fakat ölmemiş. Ak benekli bir erkek buzağı dünyaya getirmiş. Bunu Tanrı’ya kurban etmek uygun olur çünkü inek böylece kötü talihinden kurtulmuş olur. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "1" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Uzun elbiseli bir kadın kabını kacağını bırakıp gitmiş. Sonra iyice düşünmüş. “Kabımdan kacağımdan ayrı nereye gidiyorum ben?”, demiş. Sonra geri gelmiş, kabını kacağını sapasağlam bulmuş. Mutlu olup sevinmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "3" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Bir şahin, su kuşu avlamaya gitmiş. Ama yırtıcı bir kartal yerinden uçup karşısına çıkmış. Bilin ki bu kötüdür.";
    } else if (atis1 == "1" && atis2 == "4" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Bir şahin “İşte bir tavşan!” diyerek göklerden aşağı inmiş ve onu kapmak istemiş. Bu arada şahinin pençeleri yolunmuş ve tavşanın derisi sıyrılmış. Şahin pençeleri yolunmuş olarak uçup gitmiş, tavşan derisi soyulmuş olarak koşup gitmiş. Bilin ki bu kötüdür.	kötü";

    } else if (atis1 == "1" && atis2 == "3" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>“Geyik yavrusuyum. Otsuz ve susuz nasıl yaparım? Nasıl hayatta kalırım?”, demiş. Bilin ki bu kötüdür.";
    } else if (atis1 == "1" && atis2 == "3" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Bir deve bir bataklığa düşmüş. Batarken, yine otlamaya devam etmiş, fakat kendisini de bir tilki yemiş, der. Bilin ki bu kötüdür.";
    } else if (atis1 == "1" && atis2 == "1" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>Adamın biri konukluğa gitmiş. Yolda Tanrı’ya rastlamış. Ondan kut dilemiş. Tanrı da onu kutsamış: “Ağılında atların olsun, ömrün uzun olsun!”, demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "4") {
      document.getElementById("result").innerHTML += "<br>“Yaşlı yol tanrısıyım. Kırıkları onarırım, çıkıkları yerine oturturum. Evreni düzene sokarım. Hayırlı olsun!”, demiş. Bilin ki bu..";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Bir kaplan avlanmaya gitmiş. Ortalık yerde bir yaban keçisine rastlamış. Benekli yaban keçisi gidip yalçın bir kayaya çıkmış, ölümden kurtulmuş. Ölümden kurtulup sevinç ve neşe içinde anasına varmış. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "4" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>Demir kırı atın kuyruğunu düğümle ve onu rüzgârı kırana kadar son süratle sürersin; yağız atı da yıkılıp yere yayılıncaya kadar koşturursun. Öyle ki, dokuz kat keçesi yırtılıp delininceye kadar terler. Bilin ki bu kötüdür.";
    } else if (atis1 == "4" && atis2 == "3" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Yırtıcı kara kartalım. Yeşil kayalar yazlığım, kızıl kayalar kışlığım. Dağlarda kalmak hoşuma gider.”, demiş. Bilin ki bu..";
        
      

    } else if (atis1 == "3" && atis2 == "1" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Kişi kaygılanmış, gök bulutlanmış. Bulutlar arasından güneş doğmuş, kaygılar arasından sevinç gelmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "3" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Boz bulut yürümüş, halk üstüne yağmur bırakmış, kara bulut yürümüş her şeyin üstüne yağmur bırakmış. Ekinler olgunlaşmış, taze otlar çıkmış. Hayvanlar ve insanlar için iyi olmuş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "3" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Kölenin sözü beyinden ricadır, kuzgunun sözü Tanrı’ya yakarıştır. Bunları yukarıda Tanrı işitir, aşağıda insan bilir. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "1" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Yiğit bir adamın oğlu savaşa gitmiş. Savaş alanında kendinden söz ettirmiş. Evine gelirken ünlü ve mutlu, atı da yetkin olarak gelmiş. Bilin ki bu çok iyidir.";
    } else if (atis1 == "2" && atis2 == "3" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>“Sürüsü ile mutlu bir aygırım. Cevizlikler yazlığım, kuşluklar kışlağım. Buralarda yaşayıp mutlu olurum”. Bilin ki bu iyidir.";
    } else if (atis1 == "2" && atis2 == "2" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Sevgilisi ölmüş, kovası donmuş. “Sevgilisi nasıl ölür, o bir beydir. Kovası nasıl donsun, o güneşlik yerdedir.”, demiş. Bilin ki bu falın başında biraz keder vardır ama sonra yine iyiye varır.";
    } else if (atis1 == "3" && atis2 == "2" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Bir oğlan babasına ve anasına öfkelenerek kaçıp gitmiş. Sonra düşünmüş, geri gelmiş. Anamın öğüdünü alayım, babamın sözünü dinleyeyim diye geri gelmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "2" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Yetmiş yaşında gelmişi korkutmayın, bir aylık olmuşu bozdurmayın. Onlara iyilik olsun.”, demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "4" && atis2 == "3" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>“Dokuz çatallı boynuzu olan erkek geyiğim. Yüksek dizlerimin üstüne çıkarak böğürürüm. Beni yukarıda Tanrı işitir, aşağıda insanoğlu bilir. Bu kadar güçlüyüm.” demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Turna kuşu tüneğine konmuş. Farkına varmadan tuzağa takılmış, uçamadan kalakalmış. Bilin ki bu kötüdür.";
    } else if (atis1 == "2" && atis2 == "1" && atis3 == "3") {
      document.getElementById("result").innerHTML += "<br>“Yorgun geyiğim. Yazlığım olan dağıma çıkarım, yazı orada geçiririm. Mutluyum.”, demiş. Bilin ki bu iyidir.";
    } else if (atis1 == "1" && atis2 == "2" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>Hanın ordusu ava çıkmış. Avlak içine bir erkek karaca girmiş. Onu elleri ile tutmuşlar. Hanın bütün erleri sevinmiş. Bilin ki bu iyidir.";
    } else if (atis1 == "3" && atis2 == "4" && atis3 == "1") {
      document.getElementById("result").innerHTML += "<br>“Ak boyunlu boz şahinim. Manzaralı kayalıklara konup etrafa bakınırım, üstü cevizle dolu kavak üzerine inip yazı geçiririm.”, demiş. Bilin ki bu çok iyidir.";
    } else if (atis1 == "3" && atis2 == "3" && atis3 == "2") {
      document.getElementById("result").innerHTML += "<br>Semiz atın ağzı sertleşmiş. Sahibi onu iyileştirmek için hiçbir şey yapamamış. Bilin ki bu kötüdür.";
        



    } else if (atis1 != "" || atis2 != "" || atis3 != "") {
      document.getElementById("result").innerHTML += "<br>Diğer zarları da atınız.";
    }
}
