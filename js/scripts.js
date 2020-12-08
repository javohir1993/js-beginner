var totalAmount = prompt(`Qancha puling bor? So'mda kiritgin chundingmi?!`);
var ticket = 500 * 9433.34;
var hotel = 250 * 9433.34;
var museum = 120 * 10354.03;
var totalCost = ticket + hotel + museum;
var result = totalAmount - totalCost;




console.log(`
Hozirgi davlat kursidagi summalar:
Borish kelish samolyot bileti - $500 = ${ticket} so'm
Mehmonxona - $250 = ${hotel} so'm
Muzey... - 120 yevro = ${museum} so'm
Umumiy xarajatlaring so'mda ${totalCost} shuncha bo'ladi ukam.

Ukam pulin ${totalAmount} so'mgina ekan. Mndaaay o'ylab qaralsa agar oxirgi summada minus chiqsa, san bunaqa soqqali joylaga borishin uchun yana ozgina ishlashin kere. Agar pulin plus chiqsa, bemalol borib jit qb kevur :)

Shuncha pulin ortib yoki yetmi qoladi ukam: ${result}`);