 function cek(){
 if(form.usd.value == "" || form.ha.value == ""||form.dis.value == "" || form.shp.value == "" || form.modal.value == ""){
 alert("data kosong"); //jika angka kosong maka pesan akan tampil
 exit;
 }
 }

 function awrsmetsy() {
 cek();
 usd=eval(form.usd.value);
 ha=eval(form.ha.value);
 dis=eval(form.dis.value);
 shp=eval(form.shp.value);
 modal=eval(form.modal.value);
 
 hr=ha-((dis/100)*ha);
 bt=hr+shp;

 tf=(5/100)*bt;
 vtf=(10/100)*tf;
 
 sf=(5/100)*shp;
 vsf=(10/100)*sf;
 
 pf=((4.5/100)*bt)+7000;
 vpf=(10/100)*pf;
 
 ar=0.2*usd;
 vr=(10/100)*ar;
 
 oa=(15/100)*bt;
 voa=(10/100)*oa;
 
 ef1=tf+vtf+sf+vsf+pf+vpf+ar+vr;
 ef2=tf+vtf+sf+vsf+pf+vpf+ar+vr+oa+voa;
 
 paym=bt-pf;
 
 fnl1=bt-ef1;
 fnl1ok = fnl1.toFixed(2);
 fnl2=bt-ef2;
 fnl2ok = fnl2.toFixed(2);
 
 untg1=fnl1-modal;
 untg1ok = untg1.toFixed(2);
 untg2=fnl2-modal;
 untg2ok = untg2.toFixed(2);
 
 form.sblmtanpaoa.value = fnl1ok;
 form.sblmdenganoa.value = fnl2ok;
 form.stlhtanpaoa.value = untg1ok;
 form.stlhdenganoa.value = untg2ok;
 }

 function reset() {
 form.usd.value="";
 form.ha.value="";
 form.dis.value = "";
 form.shp.value="";
 form.modal.value = "";
 }
