(function () {
  var THEME_KEY = "pattaya-demo-theme";
  var LANG_KEY = "pattaya-demo-lang";

  var I18N = {
    en: {
      "meta.title": "Royal Palace Hotel Pattaya",
      "meta.desc": "Royal Palace Hotel, 215 M.10 Pattaya 2nd Road — 11 storeys, 320 rooms, a short walk from Pattaya Beach and Walking Street.",
      "brand.name": "Royal Palace",
      "brand.place": "Pattaya",
      "aria.home": "Royal Palace Hotel home",
      "aria.nav": "Primary",
      "aria.menu": "Open menu",
      "aria.menuClose": "Close menu",
      "aria.dialog": "Menu",
      "aria.lang": "Language",
      "theme.appearance": "Appearance",
      "theme.dark": "Dark",
      "theme.light": "Light",
      "theme.liveDark": "Dark theme",
      "theme.liveLight": "Light theme",
      "nav.record": "The house",
      "nav.rooms": "Rooms",
      "nav.rates": "Rates",
      "nav.facilities": "Facilities",
      "nav.gallery": "Gallery",
      "nav.location": "Location",
      "nav.enquire": "Enquire",
      "nav.compare": "Before & after",
      "menu.close": "Close",
      "hero.eyebrow": "Pattaya Second Road",
      "hero.title": "Royal Palace Hotel",
      "hero.sub": "Eleven storeys and 320 rooms in the heart of Pattaya — the beach and Walking Street a short walk away.",
      "hero.alt": "Front of Royal Palace Hotel, with the name on the porte-cochère and the roofline",
      "seal.alt": "Royal Palace Hotel crest",
      "record.kicker": "The house",
      "record.title": "A ledger of what the hotel published",
      "record.p1": "Royal Palace Hotel stands in the heart of Pattaya City, among the entertainment, business, and shopping districts. Pattaya Beach and the evening Walking Street are a few minutes’ walk.",
      "record.p2": "The house is 11 storeys, with 320 rooms looking to the sea or the garden, furnished for an easy stay. Every room has its own air-conditioning, internet access (charged), carpet or tile, a fridge and mini-bar, a hairdryer, a marble-tiled bathroom with bathtub and shower, a telephone, and a remote-control colour television with local, satellite, and multilingual programmes.",
      "record.p3": "The hotel describes Pattaya as one of the world’s premier beach resorts, with straightforward access from Bangkok and the international airport — a base for business or leisure, for one traveller or a family.",
      "chip.storeys": "11 storeys",
      "chip.rooms": "320 rooms",
      "chip.view": "Sea or garden view",
      "note.wifi.title": "Internet, as printed",
      "note.wifi": "The about page says in-room internet is charged. The footer also carries a Free Wi-Fi mark. Both are on the live site; this page does not invent a reconciliation.",
      "note.home.title": "From the old homepage",
      "note.home": "The original welcome used this photograph beside the same location lines.",
      "home.alt": "Photograph from the original Royal Palace homepage: a pier at sunset",
      "rooms.kicker": "Accommodation",
      "rooms.title": "Room index",
      "rooms.lead": "Names and photographs as the hotel filed them. Nothing here is a room the site did not show.",
      "room.superior": "Superior Room",
      "room.superior.line": "Twelve photographs on the accommodation page.",
      "room.family": "Family Room",
      "room.family.line": "Nine photographs on the accommodation page. The rate card adds “(4 beds)”.",
      "room.deluxe": "Deluxe Room",
      "room.deluxe.line": "Nine photographs on the accommodation page, plus the rate-card sample.",
      "room.junior": "Junior Suite",
      "room.junior.line": "Headed “Junior Room” beside its photograph, and “Junior Suite” on the rate card.",
      "room.s1": "Suite, 1 bedroom",
      "room.s1.line": "Named on the accommodation page and the rate card.",
      "room.s2": "Suite, 2 bedrooms",
      "room.s2.line": "Named on the accommodation page and the rate card.",
      "room.royal": "Royal Suite",
      "room.royal.line": "Named on both pages. The printed tariff is 10,000 baht in both seasons.",
      "room.standard": "Standard Room",
      "room.standard.line": "Named on the rate card, with a sample photograph. It is not a heading on the accommodation page.",
      "alt.room": "Royal Palace room photograph",
      "fittings.title": "In every room",
      "fittings.lead": "The about page lists these for all rooms — not as extras invented per type.",
      "fit.ac": "Individually controlled air-conditioning",
      "fit.net": "Internet access (charged)",
      "fit.floor": "Carpet or tile floor",
      "fit.bar": "Fridge and mini-bar",
      "fit.dry": "Hairdryer",
      "fit.bath": "Marble-tiled bathroom, bathtub and shower",
      "fit.tel": "Telephone",
      "fit.tv": "Remote-control colour TV — local, satellite, multilingual",
      "rates.kicker": "Promotion & rates",
      "rates.title": "The tariff as printed",
      "rates.lead": "Baht per room only, from the hotel’s own rate card for 1 June 2008 – 31 March 2009. Not a current quote. The site said figures could change and asked guests to check.",
      "rates.h.type": "Room",
      "rates.h.low": "1 Jun–31 Oct 2008",
      "rates.h.high": "1 Nov 2008–31 Mar 2009",
      "rates.h.net": "Internet column",
      "rates.net": "No figure printed — the cell linked to reservation",
      "rates.note": "Note on the card: rates in baht, room only, and “approx. 1 USD = 34 baht” as they printed it then.",
      "rates.extra": "Extra bed",
      "rates.extra.line": "500 baht in both seasons on the card, with its own photograph.",
      "pol.title": "House rules on the card",
      "pol.1": "Check-out is 12 noon. Late check-out, as they defined it, is 1 p.m.",
      "pol.2": "Check-out before 5 p.m. was half rate; after 5 p.m., full rate.",
      "pol.3": "No check-in hour was printed.",
      "sur.title": "Surcharges they dated",
      "sur.1": "31 December 2008: compulsory gala dinner, 2,500 baht per person per room.",
      "sur.2": "25 December 2008 – 15 January 2009: 500 baht added to the rates above.",
      "sur.3": "26 January 2009 – 1 February 2009: 500 baht added.",
      "sur.4": "12–14 April 2009: 500 baht added.",
      "sur.5": "“Subject to change without prior notice.”",
      "pay.lead": "The card shows Visa, Mastercard, Diners Club, and JCB.",
      "fac.kicker": "Facilities",
      "fac.title": "House ledger",
      "fac.lead": "Every service named on the facilities page. The brochure spells the tour desk in full and adds the ballroom note below.",
      "fac.1": "Banquet and conference rooms",
      "fac.2": "Lobby bar lounge",
      "fac.3": "24-hour room service",
      "fac.4": "Money exchange",
      "fac.5": "Baby-sitting",
      "fac.6": "Coffee shop",
      "fac.7": "Outdoor swimming pool",
      "fac.8": "Parking",
      "fac.9": "Safe deposit box",
      "fac.10": "Car rental and tour counter",
      "fac.11": "Gift shop",
      "fac.12": "Traditional Thai massage",
      "fac.13": "Porter service",
      "fac.14": "Laundry and press",
      "fac.ball.title": "Royal Ball Room",
      "fac.ball": "The brochure calls the Royal Ball Room the venue for conferences, seminars, and banquets, for up to 400 guests, with two smaller function rooms and audio-visual equipment.",
      "fac.lobby": "The same brochure invites guests to the lobby bar for a cool drink or a cocktail, with music and television.",
      "fac.coffee": "It names Pornthip Coffee Shop for Thai and international dishes, and describes the room as informal. The entrance photograph on the facilities page carries that name.",
      "fac.counter": "On the website the tour desk is cut off as “Car Rental & Tour Counte”. The brochure prints “Counter”.",
      "cap.pool": "Outdoor pool, facilities page",
      "cap.pool2": "Pool from above, facilities page",
      "cap.dining": "Dining room, facilities page",
      "cap.lobby": "Lobby, facilities page",
      "cap.coffee": "Pornthip Coffee Shop entrance",
      "cap.dining2": "Coffee shop dining room",
      "cap.conf": "Conference page",
      "gal.kicker": "Gallery",
      "gal.title": "Forty-one photographs",
      "gal.lead": "The picture gallery is labelled “41 Pics” on the hotel site. They are filed here in that order, including views also used on the facilities page. They are not sorted into room types the site never named.",
      "alt.gal": "Royal Palace gallery photograph",
      "loc.kicker": "Location",
      "loc.title": "Where the card places the house",
      "loc.lead": "Distances, times, and means exactly as the location table prints them — including “1.45 hrs”, which is their figure, not a conversion.",
      "dist.from": "From",
      "dist.km": "Km",
      "dist.time": "Time",
      "dist.by": "By",
      "dist.bkk": "Hotel to Bangkok",
      "dist.bkk.t": "2.0 hrs",
      "dist.air": "Hotel to Bangkok Airport",
      "dist.air.t": "1.45 hrs",
      "dist.walk": "Hotel to shopping, beach, Walking Street",
      "dist.walk.t": "1, 2, 5 mins",
      "dist.jom": "Hotel to Jomtien Beach",
      "dist.jom.t": "5 mins",
      "dist.sri": "Hotel to Siracha",
      "dist.sri.t": "25 mins",
      "dist.bang": "Hotel to Bang Saen Beach",
      "dist.bang.t": "40 mins",
      "dist.ray": "Hotel to Rayong",
      "dist.ray.t": "45 mins",
      "dist.sam": "Hotel to Samet Island",
      "dist.sam.t": "1.5 hrs",
      "by.car": "Car",
      "by.walk": "Walk",
      "by.boat": "Car and boat",
      "map.note": "The hotel’s map script marks 12.927374, 100.878532. The drawings below are their own map and the location-page illustration.",
      "map.open": "Open the coordinates",
      "map.alt": "Illustrated Pattaya map from the location page",
      "map.alt2": "Street map from the hotel site, marking Royal Palace Hotel",
      "loc.photo": "Photograph published on the location page. It is not captioned as a hotel facility.",
      "loc.photo.alt": "Beach photograph from the hotel location page",
      "contact.kicker": "Contact",
      "contact.title": "The desk",
      "contact.addr": "Address",
      "contact.addr.v": "215 M.10 Pattaya 2nd Road, Pattaya City, Chonburi 20260, Thailand",
      "contact.tel": "Telephone",
      "contact.fax": "Fax",
      "contact.mail": "Email",
      "contact.web": "Also printed",
      "contact.web.v": "The live site is royalpalacepattaya.com. The brochure also prints www.royalpalaceroyaltwins.com, and the Chinese line 皇宫大酒店 · 泰国 · 芭堤雅.",
      "contact.partner": "Partner named on the site",
      "contact.partner.v": "Royal Twins Palace Hotel",
      "contact.jobs": "Employment",
      "contact.jobs.v": "The jobs page said no position was open.",
      "contact.book": "Original reservation page",
      "contact.ta": "TripAdvisor link on the old site",
      "contact.ta.note": "No guest quotations were published on the hotel pages.",
      "form.title": "Enquiry",
      "form.lead": "The same fields the site asked for. This demo does not send them anywhere.",
      "form.first": "First name",
      "form.last": "Last name",
      "form.email": "Email",
      "form.email2": "Backup email",
      "form.addr": "Address",
      "form.country": "Country",
      "form.in": "Check in",
      "form.out": "Check out",
      "form.code": "Promotion code",
      "form.note": "Demo only — nothing is submitted to the hotel or to the old booking engine.",
      "form.send": "Keep this enquiry here",
      "form.ok": "Held on this page only. No message was sent.",
      "form.ph.first": "Given name",
      "form.ph.last": "Family name",
      "form.ph.email": "name@email.com",
      "form.ph.code": "If you have one",
      "bro.title": "Brochures on the download page",
      "bro.alt": "Royal Palace brochure scan",
      "ecard": "An e-card page existed in Flash. No card artwork or message could be read from the HTML.",
      "footer.copy": "The hotel site is marked © 2008 Royal Palace Hotel. This is a front-end reading of that public record — not a booking system.",
      "footer.compare": "How this sits beside the 2008 site",
      "footer.tag": "GET THE VANTAGE POINT YOU DESERVE.",
      "sticky.call": "Call",
      "sticky.ask": "Enquire",
      "cmp.kicker": "Reading",
      "cmp.title": "The 2008 site, and this ledger",
      "cmp.lead": "The hotel’s site has been online in this form for a long time. What follows keeps its record and only changes how it is read.",
      "cmp.old.h": "As published",
      "cmp.old.p": "A centred table, about 884 pixels wide, cream and gold, with a Flash stage across the top of most pages. The crest is images/brand/logo.gif.",
      "cmp.new.h": "This ledger",
      "cmp.new.p": "The same crest, the same rooms, the same tariff and the same desk — set as a vertical index, a two-column facilities ledger, then location and contact.",
      "cmp.kept": "Kept",
      "cmp.kept.1": "Crest file images/brand/logo.gif, gold and brown, not redrawn into another symbol.",
      "cmp.kept.2": "Room photographs from the accommodation page, the rate card, and the 41-picture gallery.",
      "cmp.kept.3": "320 rooms, 11 storeys, sea or garden view, and the in-room fittings.",
      "cmp.kept.4": "Facilities list, Royal Ball Room note, Pornthip Coffee Shop, lobby bar.",
      "cmp.kept.5": "2008–09 baht tariff, policies, surcharges, and the four card marks.",
      "cmp.kept.6": "Address, +66 3842 6262–6, fax +66 3842 5658, info@royalpalacepattaya.com.",
      "cmp.kept.7": "Distance table, both maps, coordinates 12.927374, 100.878532.",
      "cmp.kept.8": "Royal Twins link, jobs note, brochure scans, Free Wi-Fi mark beside the charged-internet line.",
      "cmp.not": "Not invented",
      "cmp.not.1": "No new room types, no present-day prices, no star rating.",
      "cmp.not.2": "No guest quotations — the review blocks on the old site were commented out.",
      "cmp.not.3": "No check-in hour, and no number in the “internet rates” column, because none was printed.",
      "cmp.not.4": "Flash stages and the e-card artwork could not be recovered as pictures or copy.",
      "cmp.back": "Open the ledger"
    },
    th: {
      "meta.title": "โรงแรมรอยัลพาเลซ พัทยา",
      "meta.desc": "โรงแรมรอยัลพาเลซ 215 หมู่ 10 ถนนพัทยาสาย 2 — 11 ชั้น 320 ห้อง เดินถึงหาดพัทยาและวอล์กกิ้งสตรีท",
      "brand.name": "รอยัลพาเลซ",
      "brand.place": "พัทยา",
      "aria.home": "หน้าแรก โรงแรมรอยัลพาเลซ",
      "aria.nav": "เมนูหลัก",
      "aria.menu": "เปิดเมนู",
      "aria.menuClose": "ปิดเมนู",
      "aria.dialog": "เมนู",
      "aria.lang": "ภาษา",
      "theme.appearance": "การแสดงผล",
      "theme.dark": "มืด",
      "theme.light": "สว่าง",
      "theme.liveDark": "ธีมมืด",
      "theme.liveLight": "ธีมสว่าง",
      "nav.record": "เรื่องโรงแรม",
      "nav.rooms": "ห้องพัก",
      "nav.rates": "อัตรา",
      "nav.facilities": "สิ่งอำนวยความสะดวก",
      "nav.gallery": "ภาพ",
      "nav.location": "ที่ตั้ง",
      "nav.enquire": "สอบถาม",
      "nav.compare": "ก่อนและหลัง",
      "menu.close": "ปิด",
      "hero.eyebrow": "ถนนพัทยาสาย 2",
      "hero.title": "โรงแรม<br>รอยัลพาเลซ",
      "hero.sub": "สิบเอ็ดชั้น 320 ห้อง ใจกลางพัทยา เดินถึงหาดและวอล์กกิ้งสตรีท",
      "hero.alt": "ด้านหน้าโรงแรมรอยัลพาเลซ ชื่อโรงแรมอยู่บนกันสาดและยอดอาคาร",
      "seal.alt": "ตราสัญลักษณ์โรงแรมรอยัลพาเลซ",
      "record.kicker": "เรื่องโรงแรม",
      "record.title": "บันทึกตามที่โรงแรมประกาศไว้",
      "record.p1": "โรงแรมรอยัลพาเลซอยู่ใจกลางเมืองพัทยา รายล้อมด้วยย่านบันเทิง ย่านธุรกิจ และแหล่งช้อปปิ้ง เดินไม่กี่นาทีถึงหาดพัทยา และถึงวอล์กกิ้งสตรีทในยามเย็น",
      "record.p2": "อาคารสูง 11 ชั้น มี 320 ห้อง มองทะเลหรือสวน จัดไว้ให้พักสบาย ทุกห้องมีเครื่องปรับอากาศแยกควบคุม อินเทอร์เน็ต (มีค่าบริการ) พื้นพรมหรือกระเบื้อง ตู้เย็นและมินิบาร์ ไดร์เป่าผม ห้องน้ำปูหินอ่อนพร้อมอ่างอาบน้ำและฝักบัว โทรศัพท์ และโทรทัศน์สีแบบรีโมต รับช่องท้องถิ่น ดาวเทียม และรายการหลายภาษา",
      "record.p3": "ทางโรงแรมบรรยายพัทยาว่าเป็นจุดหมายชายหาดชั้นนำ เดินทางจากกรุงเทพฯและสนามบินนานาชาติได้สะดวก เหมาะทั้งการทำงานและการพักผ่อน ตั้งแต่ผู้เดินทางคนเดียวจนถึงครอบครัว",
      "chip.storeys": "11 ชั้น",
      "chip.rooms": "320 ห้อง",
      "chip.view": "วิวทะเลหรือสวน",
      "note.wifi.title": "อินเทอร์เน็ต ตามที่พิมพ์ไว้",
      "note.wifi": "หน้าเกี่ยวกับโรงแรมระบุว่าอินเทอร์เน็ตในห้องมีค่าบริการ ส่วนท้ายเว็บมีเครื่องหมายฟรีไวไฟ ทั้งสองอย่างอยู่บนเว็บจริง หน้านี้ไม่แต่งเรื่องให้ลงรอยกัน",
      "note.home.title": "จากหน้าแรกเดิม",
      "note.home": "หน้าแรกเดิมวางภาพนี้คู่กับข้อความเรื่องทำเลเดียวกัน",
      "home.alt": "ภาพจากหน้าแรกเดิมของรอยัลพาเลซ ท่าเรือยามพระอาทิตย์ตก",
      "rooms.kicker": "ที่พัก",
      "rooms.title": "ดัชนีห้องพัก",
      "rooms.lead": "ชื่อและภาพตามที่โรงแรมจัดไว้ ไม่มีห้องที่เว็บเดิมไม่ได้แสดง",
      "room.superior": "ห้องซูพีเรียร์",
      "room.superior.line": "สิบสองภาพในหน้าที่พัก",
      "room.family": "ห้องแฟมิลี่",
      "room.family.line": "เก้าภาพในหน้าที่พัก บัตรอัตราระบุเพิ่มว่าสี่เตียง",
      "room.deluxe": "ห้องดีลักซ์",
      "room.deluxe.line": "เก้าภาพในหน้าที่พัก และภาพตัวอย่างบนบัตรอัตรา",
      "room.junior": "จูเนียร์สวีท",
      "room.junior.line": "หน้าภาพเขียนว่า Junior Room ส่วนบัตรอัตราเขียนว่า Junior Suite",
      "room.s1": "สวีท หนึ่งห้องนอน",
      "room.s1.line": "มีชื่อทั้งในหน้าที่พักและบัตรอัตรา",
      "room.s2": "สวีท สองห้องนอน",
      "room.s2.line": "มีชื่อทั้งในหน้าที่พักและบัตรอัตรา",
      "room.royal": "รอยัลสวีท",
      "room.royal.line": "มีชื่อทั้งสองหน้า อัตราที่พิมพ์ไว้คือ 10,000 บาททั้งสองฤดู",
      "room.standard": "ห้องสแตนดาร์ด",
      "room.standard.line": "มีชื่อบนบัตรอัตราพร้อมภาพตัวอย่าง ไม่ได้เป็นหัวข้อในหน้าที่พัก",
      "alt.room": "ภาพห้องพักรอยัลพาเลซ",
      "fittings.title": "ในทุกห้อง",
      "fittings.lead": "หน้าเกี่ยวกับโรงแรมระบุรายการนี้สำหรับทุกห้อง ไม่ได้แยกตามประเภท",
      "fit.ac": "เครื่องปรับอากาศควบคุมแยกห้อง",
      "fit.net": "อินเทอร์เน็ต (มีค่าบริการ)",
      "fit.floor": "พื้นพรมหรือกระเบื้อง",
      "fit.bar": "ตู้เย็นและมินิบาร์",
      "fit.dry": "ไดร์เป่าผม",
      "fit.bath": "ห้องน้ำหินอ่อน อ่างอาบน้ำและฝักบัว",
      "fit.tel": "โทรศัพท์",
      "fit.tv": "โทรทัศน์สีรีโมต — ช่องท้องถิ่น ดาวเทียม หลายภาษา",
      "rates.kicker": "โปรโมชันและอัตรา",
      "rates.title": "อัตราตามที่พิมพ์ไว้",
      "rates.lead": "บาทต่อห้อง จากบัตรอัตราของโรงแรมช่วง 1 มิถุนายน 2551 ถึง 31 มีนาคม 2552 ไม่ใช่ราคาปัจจุบัน เว็บเดิมบอกว่าตัวเลขเปลี่ยนได้และให้สอบถามอีกครั้ง",
      "rates.h.type": "ห้อง",
      "rates.h.low": "1 มิ.ย.–31 ต.ค. 2551",
      "rates.h.high": "1 พ.ย. 2551–31 มี.ค. 2552",
      "rates.h.net": "คอลัมน์อินเทอร์เน็ต",
      "rates.net": "ไม่ได้พิมพ์ตัวเลข — ช่องนั้นลิงก์ไปหน้าจอง",
      "rates.note": "หมายเหตุบนบัตร: อัตราเป็นบาท ค่าห้องเท่านั้น และพิมพ์ไว้ว่า 1 ดอลลาร์สหรัฐประมาณ 34 บาท ในตอนนั้น",
      "rates.extra": "เตียงเสริม",
      "rates.extra.line": "500 บาททั้งสองฤดูบนบัตร พร้อมภาพของตัวเอง",
      "pol.title": "กติกาบนบัตร",
      "pol.1": "เช็คเอาต์เวลา 12.00 น. เช็คเอาต์ล่าช้าตามที่กำหนดคือ 13.00 น.",
      "pol.2": "เช็คเอาต์ก่อน 17.00 น. คิดครึ่งราคา หลัง 17.00 น. คิดเต็มราคา",
      "pol.3": "ไม่ได้พิมพ์เวลาเช็คอิน",
      "sur.title": "ช่วงเก็บเพิ่มที่ระบุวันที่",
      "sur.1": "31 ธันวาคม 2551: ดินเนอร์กาล่าบังคับ 2,500 บาทต่อคนต่อห้อง",
      "sur.2": "25 ธันวาคม 2551 – 15 มกราคม 2552: บวก 500 บาทจากอัตราด้านบน",
      "sur.3": "26 มกราคม 2552 – 1 กุมภาพันธ์ 2552: บวก 500 บาท",
      "sur.4": "12–14 เมษายน 2552: บวก 500 บาท",
      "sur.5": "เปลี่ยนได้โดยไม่ต้องแจ้งล่วงหน้า ตามข้อความบนบัตร",
      "pay.lead": "บัตรแสดงเครื่องหมาย Visa, Mastercard, Diners Club และ JCB",
      "fac.kicker": "สิ่งอำนวยความสะดวก",
      "fac.title": "บัญชีของโรงแรม",
      "fac.lead": "ทุกรายการที่มีชื่อในหน้าสิ่งอำนวยความสะดวก โบรชัวร์เขียนเคาน์เตอร์ทัวร์ครบคำ และมีข้อความเรื่องห้องบอลรูมด้านล่าง",
      "fac.1": "ห้องจัดเลี้ยงและห้องประชุม",
      "fac.2": "ล็อบบี้บาร์เลานจ์",
      "fac.3": "รูมเซอร์วิส 24 ชั่วโมง",
      "fac.4": "แลกเปลี่ยนเงิน",
      "fac.5": "บริการดูแลเด็ก",
      "fac.6": "คอฟฟี่ช็อป",
      "fac.7": "สระว่ายน้ำกลางแจ้ง",
      "fac.8": "ที่จอดรถ",
      "fac.9": "ตู้เซฟ",
      "fac.10": "เคาน์เตอร์เช่ารถและทัวร์",
      "fac.11": "ร้านของฝาก",
      "fac.12": "นวดแผนไทย",
      "fac.13": "พนักงานยกกระเป๋า",
      "fac.14": "ซักและรีด",
      "fac.ball.title": "รอยัลบอลรูม",
      "fac.ball": "โบรชัวร์ระบุว่ารอยัลบอลรูมใช้จัดประชุม สัมมนา และเลี้ยง รองรับได้ถึง 400 คน มีห้องจัดเลี้ยงเล็กอีกสองห้อง และอุปกรณ์ภาพและเสียง",
      "fac.lobby": "โบรชัวร์เดียวกันเชิญไปนั่งล็อบบี้บาร์ เครื่องดื่มเย็นหรือค็อกเทล มีดนตรีและโทรทัศน์",
      "fac.coffee": "ระบุชื่อ Pornthip Coffee Shop สำหรับอาหารไทยและนานาชาติ บรรยากาศไม่เป็นทางการ ภาพทางเข้าในหน้าสิ่งอำนวยความสะดวกเขียนชื่อนี้ไว้",
      "fac.counter": "บนเว็บ เคาน์เตอร์ทัวร์ถูกตัดเป็น “Car Rental & Tour Counte” ส่วนโบรชัวร์พิมพ์คำว่า Counter ครบ",
      "cap.pool": "สระกลางแจ้ง จากหน้าสิ่งอำนวยความสะดวก",
      "cap.pool2": "สระมุมสูง จากหน้าเดียวกัน",
      "cap.dining": "ห้องอาหาร จากหน้าสิ่งอำนวยความสะดวก",
      "cap.lobby": "ล็อบบี้ จากหน้าสิ่งอำนวยความสะดวก",
      "cap.coffee": "ทางเข้า Pornthip Coffee Shop",
      "cap.dining2": "ภายในคอฟฟี่ช็อป",
      "cap.conf": "หน้าห้องประชุม",
      "gal.kicker": "คลังภาพ",
      "gal.title": "สี่สิบเอ็ดภาพ",
      "gal.lead": "แกลเลอรีบนเว็บโรงแรมเขียนว่า 41 ภาพ จัดตามลำดับนั้น รวมภาพที่ใช้ในหน้าสิ่งอำนวยความสะดวกด้วย ไม่ได้จัดเข้าประเภทห้องที่เว็บไม่ได้ตั้งชื่อ",
      "alt.gal": "ภาพจากคลังภาพรอยัลพาเลซ",
      "loc.kicker": "ที่ตั้ง",
      "loc.title": "โรงแรมวางตัวเองไว้อย่างไร",
      "loc.lead": "ระยะทาง เวลา และพาหนะตามตารางในหน้าโลเคชัน รวม “1.45 ชม.” ซึ่งเป็นตัวเลขของเขา ไม่ได้แปลงใหม่",
      "dist.from": "จาก",
      "dist.km": "กม.",
      "dist.time": "เวลา",
      "dist.by": "โดย",
      "dist.bkk": "โรงแรมถึงกรุงเทพฯ",
      "dist.bkk.t": "2.0 ชม.",
      "dist.air": "โรงแรมถึงสนามบินกรุงเทพฯ",
      "dist.air.t": "1.45 ชม.",
      "dist.walk": "โรงแรมถึงแหล่งช้อป หาด และวอล์กกิ้งสตรีท",
      "dist.walk.t": "1, 2, 5 นาที",
      "dist.jom": "โรงแรมถึงหาดจอมเทียน",
      "dist.jom.t": "5 นาที",
      "dist.sri": "โรงแรมถึงศรีราชา",
      "dist.sri.t": "25 นาที",
      "dist.bang": "โรงแรมถึงหาดบางแสน",
      "dist.bang.t": "40 นาที",
      "dist.ray": "โรงแรมถึงระยอง",
      "dist.ray.t": "45 นาที",
      "dist.sam": "โรงแรมถึงเกาะเสม็ด",
      "dist.sam.t": "1.5 ชม.",
      "by.car": "รถยนต์",
      "by.walk": "เดิน",
      "by.boat": "รถและเรือ",
      "map.note": "สคริปต์แผนที่ของโรงแรมปักที่ 12.927374, 100.878532 ภาพด้านล่างคือแผนที่และภาพประกอบจากหน้าโลเคชันของเขา",
      "map.open": "เปิดพิกัดนี้",
      "map.alt": "แผนที่พัทยาภาพประกอบจากหน้าโลเคชัน",
      "map.alt2": "แผนที่ถนนจากเว็บโรงแรม ระบุโรงแรมรอยัลพาเลซ",
      "loc.photo": "ภาพที่ลงในหน้าโลเคชัน ไม่ได้เขียนคำบรรยายว่าเป็นบริการของโรงแรม",
      "loc.photo.alt": "ภาพหาดจากหน้าโลเคชันของโรงแรม",
      "contact.kicker": "ติดต่อ",
      "contact.title": "เคาน์เตอร์",
      "contact.addr": "ที่อยู่",
      "contact.addr.v": "215 หมู่ 10 ถนนพัทยาสาย 2 เมืองพัทยา ชลบุรี 20260",
      "contact.tel": "โทรศัพท์",
      "contact.fax": "แฟกซ์",
      "contact.mail": "อีเมล",
      "contact.web": "ที่พิมพ์ไว้เพิ่ม",
      "contact.web.v": "เว็บที่เปิดอยู่คือ royalpalacepattaya.com โบรชัวร์ยังพิมพ์ www.royalpalaceroyaltwins.com และบรรทัดจีน 皇宫大酒店 · 泰国 · 芭堤雅",
      "contact.partner": "คู่ที่ระบุบนเว็บ",
      "contact.partner.v": "โรงแรมรอยัลทวินส์พาเลซ",
      "contact.jobs": "สมัครงาน",
      "contact.jobs.v": "หน้าสมัครงานระบุว่าไม่มีตำแหน่งว่าง",
      "contact.book": "หน้าจองเดิม",
      "contact.ta": "ลิงก์ทริปแอดไวเซอร์บนเว็บเดิม",
      "contact.ta.note": "ไม่มีคำพูดของแขกเผยแพร่ในหน้าของโรงแรม",
      "form.title": "แบบสอบถาม",
      "form.lead": "ช่องเดียวกับที่เว็บเดิมถาม เดโมนี้ไม่ส่งข้อมูลออกไป",
      "form.first": "ชื่อ",
      "form.last": "นามสกุล",
      "form.email": "อีเมล",
      "form.email2": "อีเมลสำรอง",
      "form.addr": "ที่อยู่",
      "form.country": "ประเทศ",
      "form.in": "วันเข้าพัก",
      "form.out": "วันออก",
      "form.code": "รหัสโปรโมชัน",
      "form.note": "เดโมเท่านั้น — ไม่ได้ส่งถึงโรงแรมหรือระบบจองเดิม",
      "form.send": "เก็บไว้ในหน้านี้",
      "form.ok": "อยู่บนหน้านี้เท่านั้น ไม่ได้ส่งข้อความออกไป",
      "form.ph.first": "ชื่อ",
      "form.ph.last": "นามสกุล",
      "form.ph.email": "name@email.com",
      "form.ph.code": "ถ้ามี",
      "bro.title": "โบรชัวร์ในหน้าดาวน์โหลด",
      "bro.alt": "ภาพสแกนโบรชัวร์รอยัลพาเลซ",
      "ecard": "มีหน้าอีการ์ดเป็นไฟล์แฟลช อ่านภาพการ์ดหรือข้อความจากการ์ดจาก HTML ไม่ได้",
      "footer.copy": "เว็บโรงแรมระบุลิขสิทธิ์ © 2008 Royal Palace Hotel หน้านี้เป็นการจัดอ่านบันทึกสาธารณะนั้นใหม่ ไม่ใช่ระบบจอง",
      "footer.compare": "หน้านี้วางข้างเว็บปี 2008 อย่างไร",
      "footer.tag": "GET THE VANTAGE POINT YOU DESERVE.",
      "sticky.call": "โทร",
      "sticky.ask": "สอบถาม",
      "cmp.kicker": "การอ่าน",
      "cmp.title": "เว็บปี 2008 และบัญชีนี้",
      "cmp.lead": "เว็บโรงแรมอยู่ในรูปนี้มานาน สิ่งที่ตามมาคือบันทึกเดิม เปลี่ยนเพียงวิธีอ่าน",
      "cmp.old.h": "ตามที่เผยแพร่",
      "cmp.old.p": "ตารางกึ่งกลางกว้างราว 884 พิกเซล พื้นครีมและทอง มีแฟลชอยู่บนสุดของเกือบทุกหน้า ตราคือไฟล์ images/brand/logo.gif",
      "cmp.new.h": "บัญชีนี้",
      "cmp.new.p": "ตราเดิม ห้องเดิม อัตราเดิม และเคาน์เตอร์เดิม จัดเป็นดัชนีแนวตั้ง บัญชีสิ่งอำนวยความสะดวกสองคอลัมน์ แล้วตามด้วยที่ตั้งและการติดต่อ",
      "cmp.kept": "ที่เก็บไว้",
      "cmp.kept.1": "ไฟล์ตรา images/brand/logo.gif สีทองและน้ำตาล ไม่ได้วาดเป็นสัญลักษณ์อื่น",
      "cmp.kept.2": "ภาพห้องจากหน้าที่พัก บัตรอัตรา และคลังภาพ 41 ภาพ",
      "cmp.kept.3": "320 ห้อง 11 ชั้น วิวทะเลหรือสวน และอุปกรณ์ในห้อง",
      "cmp.kept.4": "รายการสิ่งอำนวยความสะดวก ข้อความรอยัลบอลรูม Pornthip Coffee Shop และล็อบบี้บาร์",
      "cmp.kept.5": "อัตราบาทปี 2008–09 กติกา ช่วงเก็บเพิ่ม และเครื่องหมายบัตรสี่แบบ",
      "cmp.kept.6": "ที่อยู่ โทร +66 3842 6262–6 แฟกซ์ +66 3842 5658 อีเมล info@royalpalacepattaya.com",
      "cmp.kept.7": "ตารางระยะทาง แผนที่ทั้งสองใบ พิกัด 12.927374, 100.878532",
      "cmp.kept.8": "ลิงก์รอยัลทวินส์ ข้อความสมัครงาน สแกนโบรชัวร์ และเครื่องหมายฟรีไวไฟคู่กับบรรทัดอินเทอร์เน็ตมีค่าบริการ",
      "cmp.not": "สิ่งที่ไม่ได้แต่งขึ้น",
      "cmp.not.1": "ไม่มีประเภทห้องใหม่ ไม่มีราคาปัจจุบัน ไม่มีดาว",
      "cmp.not.2": "ไม่มีคำพูดของแขก — บล็อกรีวิวบนเว็บเดิมถูกคอมเมนต์ปิดไว้",
      "cmp.not.3": "ไม่มีเวลาเช็คอิน และไม่มีตัวเลขในคอลัมน์อัตราอินเทอร์เน็ต เพราะไม่ได้พิมพ์ไว้",
      "cmp.not.4": "ไฟล์แฟลชและภาพอีการ์ดกู้จากหน้าเว็บไม่ได้",
      "cmp.back": "เปิดบัญชี"
    }
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "th" || saved === "en") return saved;
    } catch (e) {}
    var n = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return String(n).toLowerCase().indexOf("th") === 0 ? "th" : "en";
  }

  var lang = document.documentElement.lang === "th" || document.documentElement.lang === "en"
    ? document.documentElement.lang
    : detectLang();

  function t(key) {
    var pack = I18N[lang] || I18N.en;
    return pack[key] != null ? pack[key] : (I18N.en[key] != null ? I18N.en[key] : "");
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.desc"));
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var n = el.getAttribute("data-n");
      var label = t(el.getAttribute("data-i18n-alt"));
      el.alt = n ? label + " " + n : label;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      lang = btn.getAttribute("data-lang");
      applyLang();
    });
  });

  function applyTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    document.querySelectorAll("[data-theme-set]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-theme-set") === next ? "true" : "false");
    });
    var live = document.getElementById("themeLive");
    if (live) live.textContent = next === "light" ? t("theme.liveLight") : t("theme.liveDark");
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  }

  document.querySelectorAll("[data-theme-set]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyTheme(btn.getAttribute("data-theme-set"));
    });
  });

  var menuBtn = document.getElementById("menuBtn");
  var sheet = document.getElementById("mobileNav");
  var scrim = document.getElementById("menuScrim");

  function setMenu(open) {
    if (!menuBtn || !sheet || !scrim) return;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? t("aria.menuClose") : t("aria.menu"));
    sheet.classList.toggle("is-open", open);
    scrim.classList.toggle("is-open", open);
    sheet.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("menu-open", open);
    var lock = open || document.body.classList.contains("light-open");
    document.body.style.overflow = lock ? "hidden" : "";
    document.documentElement.style.overflow = lock ? "hidden" : "";
    if (open) {
      var close = sheet.querySelector(".mobile-nav__close");
      if (close) close.focus();
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
  }
  if (scrim) scrim.addEventListener("click", function () { setMenu(false); });
  if (sheet) {
    sheet.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    var closer = sheet.querySelector(".mobile-nav__close");
    if (closer) closer.addEventListener("click", function () {
      setMenu(false);
      if (menuBtn) menuBtn.focus();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var menuWasOpen = sheet && sheet.classList.contains("is-open");
      setMenu(false);
      closeLight();
      if (menuWasOpen && menuBtn) menuBtn.focus();
      return;
    }
    if (e.key !== "Tab" || !sheet || !sheet.classList.contains("is-open")) return;
    var focusables = sheet.querySelectorAll("a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1220) setMenu(false);
  });

  var light = document.getElementById("lightbox");
  var lightImg = document.getElementById("lightboxImg");
  function closeLight() {
    if (!light) return;
    light.classList.remove("is-on");
    light.setAttribute("aria-hidden", "true");
    document.body.classList.remove("light-open");
    if (!document.body.classList.contains("menu-open")) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }
  function openLight(src, alt) {
    if (!light || !lightImg) return;
    lightImg.src = src;
    lightImg.alt = alt || "";
    light.classList.add("is-on");
    light.setAttribute("aria-hidden", "false");
    document.body.classList.add("light-open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }
  document.querySelectorAll("[data-full]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var img = btn.querySelector("img");
      openLight(btn.getAttribute("data-full"), img ? img.alt : "");
    });
  });
  if (light) {
    light.addEventListener("click", function (e) {
      if (e.target === light || e.target.closest(".close")) closeLight();
    });
  }

  var form = document.getElementById("enquiry");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = document.getElementById("formOk");
      if (ok) ok.classList.add("is-on");
      form.reset();
    });
  }

  applyLang();
  applyTheme(document.documentElement.getAttribute("data-theme") || "dark");
  document.documentElement.classList.add("ready");
})();
