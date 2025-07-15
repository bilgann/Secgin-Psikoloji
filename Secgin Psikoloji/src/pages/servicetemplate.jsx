import React from "react";
import { useParams } from "react-router-dom";

// a data object with the content of each service page
const serviceDetails = {
    bireyselpsikoterapi: {
    title: "Bireysel Psikoterapi",
    image: "src/assets/images/bireyselpsikoterapi.jpg",
    description: (
      <>
        <h3>Bireysel Psikoterapi Nedir?</h3>
        <p>
          Bireysel psikoterapi, ister yüz yüze ister online şekilde yürütülsün,
          danışan ve terapist arasında kurulan terapötik ilişkiye ve güvene
          dayalı bir süreçtir. Kendinizi daha iyi tanımak, yaşadığınız
          duygusal zorlanmalarla baş etmek ya da içsel bir denge kurmak
          istiyorsanız, bu süreç size destek olabilir.
        </p>
        <p>
          Terapist ve danışan, süreci birlikte yürütür ve her bireyin ihtiyacına
          göre şekillenen kişiye özel bir yol haritası oluşturulur. Seanslarda
          güvenli, yargılayıcı olmayan bir ortamda yaşanan problemler
          anlamlandırılır ve çözüm yolları geliştirilir. Terapi sıklığı ise
          danışanın ihtiyaçlarına göre, birlikte belirlenerek planlanır.
        </p>

        <h3>Bireysel Psikoterapiye Ne Zaman Başvurulmalıdır?</h3>
        <p>Aşağıdaki durumlarda psikoterapi desteği almayı düşünebilirsiniz:</p>
        <ul>
          <li>Yoğun kaygı, stres, öfke ya da üzüntü gibi duygularla baş etmekte zorlandığınızda</li>
          <li>Kendinizi sık sık tükenmiş, değersiz ya da umutsuz hissettiğinizde</li>
          <li>İlişkilerinizde tekrarlayan sorunlar yaşadığınızda</li>
          <li>Karar vermekte zorlandığınız ya da yönünüzü kaybetmiş hissettiğiniz dönemlerde</li>
          <li>Kayıp, travma, ayrılık gibi zorlayıcı yaşantılardan sonra</li>
          <li>Kendinize dair farkındalığınızı artırmak ve yaşam kalitenizi iyileştirmek istediğinizde</li>
        </ul>
        <p>
          Psikoterapiye başvurmak için “çok kötü” hissetmeyi beklemenize gerek
          yok. Bazen sadece kendinize alan açmak, ne hissettiğinizi anlamak ve
          daha sağlıklı bir yaşam sürmek için bile terapi desteği almak oldukça
          kıymetlidir.
        </p>

        <h3>Bireysel Psikoterapinin Hedefleri Nelerdir?</h3>
        <ul>
          <li>Duygusal farkındalığı artırmak ve duygularla daha sağlıklı başa çıkabilmek</li>
          <li>Yaşanılan zorlukları anlamlandırmak ve çözüm yolları geliştirmek</li>
          <li>Kendilik değerini güçlendirmek ve özgüveni artırmak</li>
          <li>Olumsuz düşünce kalıplarını fark edip dönüştürmek</li>
          <li>Sağlıklı ilişki dinamikleri kurabilmek</li>
          <li>Geçmiş yaşantıların bugünkü yaşama etkilerini anlamak</li>
          <li>İçsel kaynakları güçlendirerek daha tatmin edici bir yaşam sürdürebilmek</li>
        </ul>
        <p>
          Bu hedefler her birey için farklı şekillerde gelişebilir. Psikoterapi
          süreci, kişinin ihtiyaçlarına göre şekillenen ve zamanla derinleşen
          bir yolculuktur.
        </p>
      </>
    ),
    },

    ciftterapi: {
    title: "Çift ve İlişki Terapisi",
    image: "src/assets/images/ciftterapi.jpg",
    description: (
            <>
            <h3>Çift ve İlişki Terapisi Nedir?</h3>
            <p>
                Çift ve ilişki terapisi, romantik ilişkide yaşanan iletişim problemleri, çatışmalar ya da duygusal uzaklık gibi durumların ele alındığı, çiftin birlikte katıldığı bir terapi sürecidir. Bu süreçte tarafların birbirini daha iyi anlaması, duygularını ve ihtiyaçlarını daha sağlıklı ifade edebilmesi amaçlanır.
                Terapide, partnerlerin ilişkisel dinamikleri incelenir ve yaşanan problemlere birlikte çözüm yolları aranmaya çalışılır. Seanslar, tarafsız ve yargılayıcı olmayan bir ortamda gerçekleşir; her iki bireyin de kendini ifade edebilmesi için güvenli bir alan oluşturulur. Çiftin ihtiyaçlarına göre süreç bireyselleştirilebilir ve terapi sıklığı birlikte planlanır.
            </p>

            <h3>Ne Zaman Çift ve İlişki Terapisine Başvurulmalıdır?</h3>
            <p>Aşağıdaki durumlarda destek almayı düşünebilirsiniz:</p>
            <ul>
                <li>İletişim kopukluğu, yanlış anlaşılmalar ya da sık tartışmalar yaşandığında</li>
                <li>Güven sorunları, aldatma ya da duygusal kırılmalar olduğunda</li>
                <li>Duygusal mesafe ya da yakınlık problemleri hissedildiğinde</li>
                <li>Geçmiş travmaların ya da ailevi etkilerin ilişkiyi zorladığı durumlarda</li>
                <li>İlişkiyi daha sağlıklı bir temele oturtmak veya bağları güçlendirmek istendiğinde</li>
                <li>Evlilik öncesi ya da ayrılık sürecinde karar verme güçlüğü yaşandığında</li>
            </ul>
            <p>
                Terapiye başvurmak için ilişkinin “krizde” olması gerekmez. Bazen sadece daha sağlıklı iletişim kurmak ya da duygusal bağı güçlendirmek için bile bu süreç çok kıymetli olabilir.
            </p>

            <h3>Çift ve İlişki Terapisinin Hedefleri Nelerdir?</h3>
            <ul>
                <li>Etkili iletişim becerilerini geliştirmek</li>
                <li>Anlaşıldığını ve duyulduğunu hissetmek</li>
                <li>İlişki içindeki tekrar eden döngüleri fark etmek ve değiştirmek</li>
                <li>Güven ve bağlılığı yeniden inşa etmek</li>
                <li>Çatışmaları yapıcı şekilde ele alabilmek</li>
                <li>Ortak hedefler ve değerler üzerinde uzlaşmak</li>
                <li>Daha doyumlu ve sağlıklı bir ilişki kurmak</li>
            </ul>
            </>
        )
    },

    duygudurumbozukluklari: {
    title: "Duygudurum ve Anksiyete Bozuklukları",
    image: "src/assets/images/duygudurumbozukluklari.jpg",
    description: (
        <>
      <h3>Duygudurum ve Anksiyete Bozuklukları</h3>

      <p>
        Duygudurum ve anksiyete bozuklukları, kişinin iç dünyasında yoğun ve sürekli bir duygusal dalgalanma ya da kaygı yaşamasına neden olan psikolojik durumlardır. Depresyon, bipolar bozukluk, panik bozukluk, yaygın kaygı bozukluğu ve obsesif kompulsif bozukluk gibi birçok farklı tanı bu başlık altında yer alır.
        Bu tür zorlanmalar, yalnızca ruh halini değil; düşünce biçimini, beden duyumlarını, ilişkileri ve günlük yaşamı da doğrudan etkiler. Psikoterapi süreci, bu duygusal yoğunlukları anlamlandırmaya, düşünce kalıplarını fark etmeye ve duygularla baş etme becerilerini güçlendirmeye odaklanır. Gerektiğinde psikiyatrist iş birliğiyle süreç çok yönlü şekilde desteklenebilir.
      </p>

      <h3>Ne Zaman Psikoterapiye Başvurulmalıdır?</h3>

      <p>Aşağıdaki durumlarda destek almayı düşünebilirsiniz:</p>

      <ul>
        <li>Sürekli üzgün, endişeli, gergin ya da tükenmiş hissettiğinizde</li>
        <li>Uykuda, iştahta ya da enerjide belirgin değişiklikler fark ettiğinizde</li>
        <li>Gelecekle ilgili yoğun kaygılar, kuruntular ya da felaket senaryoları zihninizi meşgul ettiğinde</li>
        <li>Kalp çarpıntısı, nefes darlığı gibi fiziksel belirtilerle birlikte anksiyete yaşadığınızda</li>
        <li>Günlük işlevlerinizde aksama, ilişkilerde zorlanma ya da içe çekilme başladıysa</li>
        <li>Kendinize dair olumsuz düşünceler, suçluluk duyguları ya da değersizlik hissi baskınsa</li>
      </ul>

      <p>
        Bu duygular uzun süredir hayatınızın bir parçası haline geldiyse, yalnız başa çıkmakta zorlanıyor olabilirsiniz. 
        Bu noktada profesyonel destek almak hem rahatlatıcı hem de yol gösterici olabilir.
      </p>

      <h3>Terapinin Hedefleri Nelerdir?</h3>

      <ul>
        <li>Kaygı, çökkünlük, öfke gibi zorlayıcı duygularla baş etmeyi öğrenmek</li>
        <li>Duygusal dalgalanmaların nedenlerini fark etmek</li>
        <li>Olumsuz düşünce döngülerini tanımak ve dönüştürmek</li>
        <li>İçsel kaynakları ve başa çıkma becerilerini güçlendirmek</li>
        <li>Günlük yaşama işlevselliği ve motivasyonu geri kazandırmak</li>
        <li>Zihinsel ve bedensel belirtileri regüle etmeyi öğrenmek</li>
        <li>Kişinin kendi ihtiyaçlarını daha sağlıklı ifade edebilmesini sağlamak</li>
      </ul>
    </>
    ),
    },

    bagimlilik: {
        title: "Bağımlılık",
        image: "src/assets/images/bagimlilik.jpg",
        description: (
            <>
            <h3>Bağımlılık</h3>
            <p>
                Bağımlılık, kişinin madde, davranış ya da ilişkilere karşı kontrolünü kaybettiği; buna rağmen bu alışkanlığı
                sürdürmekten kendini alıkoyamadığı bir süreçtir. Alkol, sigara, madde kullanımı gibi kimyasal bağımlılıkların yanı sıra;
                kumar, sosyal medya, oyun, alışveriş, yeme, seks gibi davranışsal bağımlılıklar da kişinin hayatını ciddi biçimde etkileyebilir.
            </p>
            <p>
                Bağımlılık sadece “irade” meselesi değildir. Çoğu zaman bir duyguyla baş edememe, boşluk hissi, stres ya da geçmiş travmalarla ilişkilidir.
                Terapi süreci, bağımlılığın altında yatan duygusal nedenleri anlamlandırmak, tetikleyici unsurları fark etmek ve
                daha sağlıklı başa çıkma yolları geliştirmek üzerine yapılandırılır. Bu süreçte kişi yargılanmaz, zorlandığı yerde yanında olunur.
            </p>

            <h3>Ne Zaman Psikoterapiye Başvurulmalıdır?</h3>
            <ul>
                <li>Davranışlarınız üzerindeki kontrolü kaybettiğinizi hissediyorsanız</li>
                <li>Bir madde ya da davranış artık hayatınızın merkezine yerleştiyse</li>
                <li>Yoksunluk yaşadığınızda yoğun öfke, huzursuzluk, boşluk hissi oluşuyorsa</li>
                <li>Bağımlılığınız ilişkilerinizi, işinizi, sağlığınızı olumsuz etkilemeye başladıysa</li>
                <li>Tekrarlayan bırakma girişimlerine rağmen sürdüremiyorsanız</li>
                <li>Bağımlılık davranışı sonrasında suçluluk ya da pişmanlık duyuyorsanız</li>
                <li>Kendinizi yalnız, çaresiz ya da duygularınızı bastırmak için bu davranışa yönelirken buluyorsanız</li>
            </ul>
            <p>
                Unutmayın, bağımlılıklar yalnızlıkta büyür. Birlikte çalışıldığında, terapi ortamıyla sağlıklı bir şekilde hayatınızdan uzaklaşabilir.
            </p>

            <h3>Terapinin Hedefleri Nelerdir?</h3>
            <ul>
                <li>Bağımlılık davranışının kökenini ve işlevini anlamak</li>
                <li>Tetikleyici durumları tanımak ve bunlarla baş etme becerilerini geliştirmek</li>
                <li>Duygusal regülasyonu güçlendirmek</li>
                <li>Sağlıklı alışkanlıklar ve destekleyici rutinler oluşturmak</li>
                <li>Bağımlılıkla gelen suçluluk ve değersizlik duygularını dönüştürmek</li>
                <li>Relaps (nüks) durumları için farkındalık ve strateji geliştirmek</li>
                <li>Kişinin içsel gücünü ve bağımsızlık hissini yeniden inşa etmek</li>
            </ul>
            </>

        ),
    },

    cinselterapi: {
        title: "Cinsel Terapi",
        image: "src/assets/images/cinselterapi.jpg",
        description: (
            <>
  <h3>Cinsel Terapi</h3>
  <p>
    Cinsel terapi, bireyin ya da çiftlerin yaşadıkları cinsel sorunları ele almak, anlamlandırmak ve çözüm yolları geliştirmek amacıyla yürütülen bir terapi sürecidir.
    Cinsellik, ilişkisel ve bireysel düzeyde birçok faktörden etkilenen doğal bir yaşantıdır ve zaman zaman çeşitli zorluklar yaşanabilir.
  </p>
  <p>
    Bu süreçte; cinsel işlev bozuklukları, isteksizlik, ağrı, performans kaygısı ya da cinsel kimlik ve yönelimle ilgili konular, güvenli ve yargılayıcı olmayan bir ortamda ele alınır.
    Terapide yaşanan sıkıntılar yalnızca fiziksel değil, duygusal ve zihinsel boyutlarıyla birlikte değerlendirilir.
    Cinsel terapi, bireyin ya da çiftin ihtiyacına göre yapılandırılır ve mahremiyete büyük özen gösterilir.
  </p>

  <h3>Ne Zaman Cinsel Terapiye Başvurulmalıdır?</h3>
  <ul>
    <li>Cinsel isteksizlik, haz alamama ya da cinsel kaçınma durumlarında</li>
    <li>Erken boşalma, sertleşme sorunları, orgazm olamama gibi işlevsel problemler yaşandığında</li>
    <li>Cinsellikle ilgili kaygı, suçluluk ya da utanç duyguları baskın olduğunda</li>
    <li>İlişki içinde cinselliğin bir çatışma ya da uzaklık kaynağı haline geldiği durumlarda</li>
    <li>Cinsel kimlik, yönelim ya da beden algısıyla ilgili kafa karışıklıkları yaşandığında</li>
    <li>Cinsellik hakkında açık konuşmakta, ihtiyaç ya da sınır ifade etmekte zorlanıldığında</li>
  </ul>
  <p>
    Cinsel sorunlar hem bireyin hem ilişkinin yaşam kalitesini etkileyebilir.
    Bu nedenle, utanç duymadan ve ertelemeye gerek kalmadan profesyonel destek almak oldukça önemlidir.
  </p>

  <h3>Cinsel Terapinin Hedefleri Nelerdir?</h3>
  <ul>
    <li>Cinsellikle ilgili doğru bilgi edinmek ve yanlış inanışları sorgulamak</li>
    <li>Cinsel işlev bozukluklarını anlamak ve çözüm geliştirmek</li>
    <li>Cinsellikle ilgili kaygı ve performans baskısını azaltmak</li>
    <li>Beden algısı ve cinsel özgüveni güçlendirmek</li>
    <li>Cinsellik hakkında açık, rahat ve sağlıklı iletişim kurabilmek</li>
    <li>Partnerle duygusal ve fiziksel yakınlığı artırmak</li>
    <li>Kişinin kendi cinselliğini keşfetmesi ve sağlıklı bir cinsel yaşam sürdürebilmesi</li>
  </ul>
            </>

        ),
    },

    kisilikbozukluklari: {
        title: "Kişilik Bozuklukları",
        image: "src/assets/images/kisilikbozukluklari.jpg",
        description: (
            <>
  <h3>Kişilik Bozuklukları</h3>
  <p>
    Kişilik bozuklukları, bireyin düşünme, hissetme, davranma ve ilişki kurma biçimlerinin uzun süreli ve katı bir örüntü halinde yaşandığı psikolojik durumlardır.
    Bu örüntüler, kişinin kendisiyle, çevresiyle ve yaşamla kurduğu bağı zorlaştırabilir. Kişilerarası ilişkilerde işlevsel kayıplara yol açabilir.
    Ancak kişilik bozukluğu tanısı almış olmak, değişim mümkün değil demek değildir.
  </p>
  <p>
    Terapötik süreçte kişi, kendini ve ilişkilerini nasıl deneyimlediğini keşfetmeye, tekrarlayan ilişki döngülerini fark etmeye ve kişilerarası ilişkilerde daha işlevsel başa çıkma yolları geliştirmeye yönlendirilir.
    Kişilik örüntülerini anlamak ve dönüştürmek zaman alsa da psikoterapi bu yolculukta güçlü bir destek sunar.
  </p>

  <h3>Ne Zaman Psikoterapiye Başvurulmalıdır?</h3>
  <ul>
    <li>İlişkilerde sürekli çatışmalar, güvensizlik ya da yoğun duygusal iniş çıkışlar yaşanıyorsa</li>
    <li>Kişi kendisini sık sık yalnız, anlaşılmamış ya da dışlanmış hissediyorsa</li>
    <li>Duyguları aşırı yoğun ya da donuk bir şekilde yaşanıyorsa</li>
    <li>Öfke kontrolünde, sınır koymada veya güven kurmada zorluklar varsa</li>
    <li>Kimlik, değer veya yön bulma konularında karmaşa hissediliyorsa</li>
    <li>Düşünce ve davranış biçimleri kişinin yaşam kalitesini olumsuz etkiliyorsa</li>
  </ul>
  <p>
    Bu belirtiler kişinin hem içsel huzurunu hem de ilişkilerini zorlayabilir.
    Psikoterapi, bu örüntüleri yargılamadan anlamak ve dönüştürmek için güvenli bir alan sunar.
  </p>

  <h3>Terapinin Hedefleri Nelerdir?</h3>
  <ul>
    <li>Kişilik örüntülerinin farkına varmak ve bunların kökenlerini anlamak</li>
    <li>Duygularla baş etme, öfke kontrolü ve sınır koyma becerilerini geliştirmek</li>
    <li>Kendi ihtiyaçlarını ve değerlerini tanımak</li>
    <li>Kişilerarası ilişkide sağlıklı ve sürdürülebilir bağlar kurabilmek</li>
    <li>Kendilik algısını güçlendirmek ve içsel dengeyi artırmak</li>
    <li>Tekrarlayan yaşam döngülerini yeni yollarla geliştirmek</li>
    <li>Yaşamla ve kendilikle daha uyumlu bir bağ kurabilmek</li>
  </ul>
        </>
        ),
    },

    yassureci: {
        title: "Yas ve Kayıp Süreçleri",
        image: "src/assets/images/yassureci.jpg",
        description: (
            <>
  <h3>Yas ve Kayıp Süreçleri</h3>
  <p>
    Yas, yalnızca birinin kaybı sonrası ortaya çıkan bir süreç değil; ayrılık, evcil hayvanının kaybı, sağlık sorunları, iş veya yaşam rolü kaybı gibi pek çok durumu da kapsayan doğal ve insani bir duygusal tepkidir. 
    Her birey yas sürecini kendine özgü bir şekilde deneyimler; bazı duygular beklenmedik derecede yoğun, bazılarıysa zamanla şekil değiştirerek ortaya çıkabilir.
  </p>
  <p>
    Psikoterapi süreci, kişinin yaşadığı kaybı anlamlandırmasına, duygularına alan açmasına ve bu duygularla baş etme becerilerini geliştirmesine yardımcı olur. 
    Kayıp sonrası gelen boşluk hissi, suçluluk, öfke ya da donukluk gibi duygular; terapi içinde yargılanmadan ele alınır.
  </p>

  <h3>Ne Zaman Psikoterapiye Başvurulmalıdır?</h3>
  <ul>
    <li>Yakın bir kayıp sonrası günlük işlevsellikte belirgin zorlanma yaşanıyorsa</li>
    <li>Yas süreci beklenenden daha uzun sürüyor ve içinden çıkılamıyorsa</li>
    <li>Yoğun suçluluk, öfke, çaresizlik ya da boşluk duyguları baskınsa</li>
    <li>Ayrılık, boşanma, çocuk kaybı, düşük, evcil hayvan kaybı gibi travmatik yaslar söz konusuysa</li>
    <li>Kayıptan sonra hayata yeniden tutunmakta, yeni bir yön bulmakta zorlanılıyorsa</li>
    <li>Duygular bastırılıyor ya da sürekli inkâr ediliyorsa</li>
  </ul>
  <p>
    Yas, geçmesi gereken bir “problem” değil; yaşanması gereken bir süreçtir. Ancak bu süreç bazen kişinin tek başına taşıyamayacağı kadar ağır hissedilebilir. 
    Böyle durumlarda destek almak iyileşmenin önemli bir parçasıdır.
  </p>

  <h3>Terapinin Hedefleri Nelerdir?</h3>
  <ul>
    <li>Kaybı ve bu kaybın yarattığı etkileri anlamlandırmak</li>
    <li>Suçluluk, öfke, özlem gibi karmaşık duygularla baş etmeyi öğrenmek</li>
    <li>Duygulara alan açmak ve yas sürecini bastırmadan yaşayabilmek</li>
    <li>Kaybedilen kişi/rol ile bağın yeni bir biçimde devamını keşfetmek</li>
    <li>Yaşamın yeniden anlam kazanmasına destek olmak</li>
    <li>Hayatın geri kalanına dair umut, yön ve motivasyon geliştirmek</li>
    <li>Kişinin kayıpla birlikte değişen kimliğini tanıyabilmesine alan açmak</li>
  </ul>
            </>
        ),
    },

    fobiler: {
        title: "Fobiler",
        image: "src/assets/images/fobiler.jpg",
        description: (
            <>
  <h3>Fobiler</h3>
  <p>
    Fobiler, belirli bir nesneye, duruma ya da ortama karşı duyulan yoğun ve kontrol edilemeyen korku tepkileridir. 
    Kişi, korkusunun mantıklı olmadığının farkında olabilir; ancak bu durum onun yaşadığı kaygıyı ve kaçınma davranışını azaltmaz. 
    Uçak, asansör, böcek, kan, kalabalık ya da sosyal ortamlar gibi birçok alana yönelik fobiler gelişebilir.
  </p>
  <p>
    Fobiler zamanla kişinin yaşam alanını daraltabilir, kaçınma davranışları hayat kalitesini düşürebilir. 
    Psikoterapi sürecinde, fobinin kökeni, tetikleyici unsurlar ve kaçınma davranışları ele alınarak korkunun yönetilebilir hale gelmesi hedeflenir. 
    Güvenli bir terapötik ortamda adım adım çalışmak, fobinin üzerinizdeki etkisini azaltmada etkili olur.
  </p>

  <h3>Ne Zaman Psikoterapiye Başvurulmalıdır?</h3>
  <ul>
    <li>Belirli bir nesne, durum veya ortam karşısında yoğun ve tekrar eden bir korku yaşıyorsanız</li>
    <li>Bu korku nedeniyle günlük yaşamda kaçınma davranışları başladıysa</li>
    <li>Korktuğunuz şeyi düşünmek bile panik, terleme, çarpıntı gibi fiziksel belirtilere yol açıyorsa</li>
    <li>Sosyal ortamlardan uzak durmak, yalnız kalamamak ya da güvenli hissetmek için sürekli önlem alma ihtiyacı duyuyorsanız</li>
    <li>Bu korkular ilişkilerinizi, iş yaşamınızı veya sosyal hayatınızı etkiliyorsa</li>
  </ul>
  <p>
    Fobiler görmezden gelinerek geçmez. Ancak doğru yaklaşımla ve güvenli bir terapi süreciyle kontrol altına alınabilir ve etkisini kaybedebilir.
  </p>

  <h3>Terapinin Hedefleri Nelerdir?</h3>
  <ul>
    <li>Fobinin altında yatan öğrenilmiş korkuları anlamak</li>
    <li>Kaçınma davranışlarını azaltmak ve yüzleşme becerisi kazanmak</li>
    <li>Düşünce-duygu-beden tepkileri arasındaki bağlantıyı fark etmek</li>
    <li>Korkulan durumla başa çıkma becerileri geliştirmek</li>
    <li>Korkunun hayatı kısıtlayıcı etkisini azaltmak</li>
    <li>Güven duygusunu içselleştirmek ve yeniden kontrol hissi kazanmak</li>
    <li>Kişinin günlük hayatında özgürleşmesini desteklemek</li>
  </ul>
            </>
        ),
    },

};


export default function ServiceTemplate() {
    const { serviceName } = useParams();
    const service = serviceDetails[serviceName];

     return (
    <main className="container">
      <section className={`service-page ${serviceName}`}>
        <h2>{service.title}</h2>

        <div className="service-layout">
          <div className="left-side">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-text-container">{service.description}</div>
          </div>

          <div className="right-side">
            <div className="contact-box">
                <div className="section-header">
                <h2>İletişim</h2>
                </div>
                <div className="contact-content">
                <div className="contact-details-vertical">
                    {/* Telefon */}
                    <div className="contact-item">
                    <div className="item-title">
                        <svg
    width={24}
    height={24}
    viewBox="0 0 33 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_60_394)">
      <path
        d="M10.6279 2.06783C10.1316 0.50578 8.82329 -0.325633 7.57295 0.119467L1.90129 2.13501C0.779852 2.53812 0 3.86502 0 5.37668C0 26.1536 12.9288 43.0002 28.8739 43.0002C30.034 43.0002 31.0523 41.984 31.3617 40.5228L32.9085 33.1324C33.2501 31.5032 32.612 29.7984 31.4132 29.1517L25.226 25.7925C24.1754 25.2214 22.9573 25.6161 22.2419 26.7667L19.6381 30.9069C15.1008 28.1104 11.4271 23.3234 9.28089 17.4112L12.4583 14.0267C13.3413 13.0861 13.6442 11.5073 13.2059 10.1384L10.6279 2.07623V2.06783Z"
        fill="#7899D4"
      />
    </g>
    <defs>
      <clipPath id="clip0_60_394">
        <rect width={33} height={43} fill="white" />
      </clipPath>
    </defs>
                        </svg>
                        <h3 className="medium-text">Telefon</h3>
                    </div>
                    <p>0 (533) 034 40 04</p>
                    </div>

                    {/* Adres */}
                    <div className="contact-item">
                    <div className="item-title">
                        <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 33 43"
    fill="none"
  >
    <g clipPath="url(#clip0_60_397)">
      <path
        d="M18.5367 42.0334C22.9453 36.6276 33 23.5259 33 16.1667C33 7.24133 25.6094 0 16.5 0C7.39062 0 0 7.24133 0 16.1667C0 23.5259 10.0547 36.6276 14.4633 42.0334C15.5203 43.3217 17.4797 43.3217 18.5367 42.0334ZM16.5 10.7778C19.5379 10.7778 22 13.1902 22 16.1667C22 19.1432 19.5379 21.5556 16.5 21.5556C13.4621 21.5556 11 19.1432 11 16.1667C11 13.1902 13.4621 10.7778 16.5 10.7778Z"
        fill="#7899D4"
      />
    </g>
    <defs>
      <clipPath id="clip0_60_397">
        <rect width={33} height={43} fill="white" />
      </clipPath>
    </defs>
                        </svg>
                        <h3 className="medium-text">Adres</h3>
                    </div>
                    <p>
                        Arabacıalanı Mah. Cadde 54 I Blok Kat: 3 Daire: 3014, Serdivan,
                        Sakarya, Türkiye
                    </p>
                    </div>

                    {/* Çalışma Saatleri */}
                    <div className="contact-item">
                    <div className="item-title">
                        <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 38 38"
    fill="none"
  >
    <g clipPath="url(#clip0_60_406)">
      <path
        d="M34.4375 19C34.4375 27.5262 27.5262 34.4375 19 34.4375C10.4738 34.4375 3.5625 27.5262 3.5625 19C3.5625 10.4738 10.4738 3.5625 19 3.5625C27.5262 3.5625 34.4375 10.4738 34.4375 19ZM0 19C0 29.493 8.50695 38 19 38C29.493 38 38 29.493 38 19C38 8.50695 29.493 0 19 0C8.50695 0 0 8.50695 0 19ZM17.2188 8.90625V19C17.2188 19.5938 17.5156 20.1504 18.0129 20.4844L25.1379 25.2344C25.9543 25.7836 27.0602 25.5609 27.6094 24.7371C28.1586 23.9133 27.9359 22.8148 27.1121 22.2656L20.7812 18.05V8.90625C20.7812 7.91914 19.9871 7.125 19 7.125C18.0129 7.125 17.2188 7.91914 17.2188 8.90625Z"
        fill="#7899D4"
      />
    </g>
    <defs>
      <clipPath id="clip0_60_406">
        <rect width={38} height={38} fill="white" />
      </clipPath>
    </defs>
                        </svg>
                        <h3 className="medium-text">Çalışma Saatleri</h3>
                    </div>
                    <p>
                        Pazartesi – Cumartesi
                        <br />
                        12:00 – 20:00
                    </p>
                    </div>
                </div>
                </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}