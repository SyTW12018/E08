(function(window, undefined) {
  var dictionary = {
    "62735975-3528-4e78-be2c-49cf017417e8": "Nuevo_usuario",
    "9436ec17-0803-493b-b645-e1f81dc4bc64": "productos_intel",
    "c3553e10-fce4-4d2e-b506-91f7239d6619": "Gregor",
    "8853e779-6c25-459d-acd6-2ef6ec18526f": "Freepik",
    "f944cb29-898a-409d-982c-f0012b3a5a8a": "productos_huawei",
    "4ef026f1-5cc6-4384-8a95-06b502a3dcac": "Bienvenida_2",
    "5864bb23-ba46-4761-8bf4-5c1babea1c8b": "Mis_reservas",
    "d4513289-82c6-44a3-b545-b0b739c565f5": "Atencion",
    "c76e3859-374b-4c5d-b31d-acbfe66b965d": "productos_iphone",
    "5c91abfa-cfbf-4076-bbb8-b8104a7adbdb": "Rest_contraseña",
    "dbfbca7b-9213-4110-b947-191cd004c8cb": "Pagos",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Bienvenida",
    "031b8f70-0e1e-4fe4-b9cb-6d0406989630": "Reservas_intel",
    "0ec0cb23-1822-4dc5-9810-712de9fdee5c": "Redes sociales",
    "4c8e3591-16da-45c8-9d5a-f058078789d3": "Reservas_huawei",
    "9c5c6d61-5279-42c5-9ba1-68f3ac64e854": "Reservas",
    "8174a7f2-d1df-45fe-8dfc-6ccc17b6a14e": "Reservas_apple",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);