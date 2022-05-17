$(document).ready(function () {
  var zindex = 10;

  $("div.card").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({ zIndex: zindex })
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({ zIndex: zindex })
        .addClass("show");

      zindex++;
    }

  });
});

function fill_package(ele) {
  var id = ele.id;
  Swal.fire({
    title: "Are you sure? 💡",
    text: "Your manager will need to approve for the requested license! Once approval is granted, the license will be issued!",
    // type: "warning",
    imageUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Alert-Download-PNG.png',
    imageHeight: 100,
    imageWidth: 100,
    showCancelButton: true,
    confirmButtonColor: '#837cfa',
    confirmButtonText: 'Yes, confirm I need the license! ✅',
    cancelButtonText: "No, cancel please! ❌",
    closeOnConfirm: false,
    closeOnCancel: false
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Success!", "Great! You've been successfully redirected! 🔗", "success");
      if (id == 'fill dotultimate') {
        window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+dotUltimate")
      }
      else if (id == 'fill all') {
        window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+allProductPack")
      }
    } else {
      Swal.fire({
        title: "Cancelled",
        text: "Taking you back to the portal! 🔙",
        imageUrl: 'https://www.freeiconspng.com/thumbs/stop-sign-png/stop-sign-png-26.png',
        imageHeight: 100,
        imageWidth: 100,
        // type: "error",
        timer: 3000
      }).then(
        function (dismiss) {
          if (dismiss === 'timer') {
            console.log('I was closed by the timer')
          }
        }
      )
    }
  })
}

function fill_tech(ele) {
  var id = ele.id;
  Swal.fire({
    title: "Are you sure? 💡",
    text: "Your manager will need to approve for the requested license! Once approval is granted, the license will be issued!",
    // type: "warning",
    imageUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Alert-Download-PNG.png',
    imageHeight: 100,
    imageWidth: 100,
    showCancelButton: true,
    confirmButtonColor: '#837cfa',
    confirmButtonText: 'Yes, confirm I need the license! ✅',
    cancelButtonText: "No, cancel please! ❌",
    closeOnConfirm: false,
    closeOnCancel: false
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Success!", "Great! You've been successfully redirected! 🔗", "success");
      switch (id) {
        case 'fill pycharm':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+PyCharm");
          // window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=prod&arguments.software=PyCharm%20-%20Commercial%20annual%20subscription");
          break;
        case 'fill webstorm':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+WebStorm");
          break;
        case 'fill idea':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+IntelliJ+IDEA");
          break;
        case 'fill clion':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+CLion");
          break;
        case 'fill phpstorm':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+PhpStorm");
          break;
        case 'fill datagrip':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+DataGrip");
          break;
        case 'fill dataspell':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+DataSpell");
          break;
        case 'fill appcode':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+AppCode");
          break;
        case 'fill rubymine':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+RubyMine");
          break;
        case 'fill goland':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+GoLand");
          break;
        case 'fill rider':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+Rider");
          break;
        case 'fill resharper':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+ReSharper");
          break;
        case 'fill resharper_c++':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+ReSharper_c++");
          break;
        case 'fill dottrace':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+dotTrace");
          break;
        case 'fill dotmemory':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+dotMemory");
          break;
        case 'fill dotcover':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+dotCover");
          break;
        case 'fill spacefree':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+SpaceFree");
          break;
        case 'fill teamcity':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+TeamCity");
          break;
        case 'fill docker_desktop':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Docker+Desktop");
          break;
        case 'fill dotpeek':
          window.open("https://concord.prod.walmart.com/api/v1/org/strati/project/tcs-licensing/repo/tcs-licensing/start/requestSpecificLicenseAsLoggedInUser?activeProfiles=dev&arguments.software=Jetbrains+dotPeek");
          break;
      }
    } else {
      Swal.fire({
        title: "Cancelled",
        text: "Taking you back to the portal! 🔙",
        imageUrl: 'https://www.freeiconspng.com/thumbs/stop-sign-png/stop-sign-png-26.png',
        imageHeight: 100,
        imageWidth: 100,
        // type: "error",
        timer: 3000
      }).then(
        function (dismiss) {
          if (dismiss === 'timer') {
            console.log('I was closed by the timer')
          }
        }
      )
    }
  })
}

function hrefs(ele) {
  var id = ele.id;
  switch (id) {
    case 'fill pycharm':
      window.open("https://www.jetbrains.com/pycharm/");
      break;
    case 'fill webstorm':
      window.open("https://www.jetbrains.com/webstorm/");
      break;
    case 'fill idea':
      window.open("https://www.jetbrains.com/idea/");
      break;
    case 'fill phpstorm':
      window.open("https://www.jetbrains.com/phpstorm/");
      break;
    case 'fill rubymine':
      window.open("https://www.jetbrains.com/ruby/");
      break;
    case 'fill clion':
      window.open("https://www.jetbrains.com/clion/");
      break;
    case 'fill appcode':
      window.open("https://www.jetbrains.com/objc/");
      break;
    case 'fill datagrip':
      window.open("https://www.jetbrains.com/datagrip/");
      break;
    case 'fill goland':
      window.open("https://www.jetbrains.com/go/");
      break;
    case 'fill rider':
      window.open("https://www.jetbrains.com/rider/");
      break;
    case 'fill dataspell':
      window.open("https://www.jetbrains.com/dataspell/");
      break;
    case 'fill resharper':
      window.open("https://www.jetbrains.com/resharper/");
      break;
    case 'fill resharper-cpp':
      window.open("https://www.jetbrains.com/resharper-cpp/");
      break;
    case 'fill dottrace':
      window.open("https://www.jetbrains.com/profiler/");
      break;
    case 'fill dotpeek':
      window.open("https://www.jetbrains.com/decompiler/");
      break;
    case 'fill dotmemory':
      window.open("https://www.jetbrains.com/dotmemory/");
      break;
    case 'fill dotcover':
      window.open("https://www.jetbrains.com/dotcover/");
      break;
    case 'fill teamcity':
      window.open("https://www.jetbrains.com/teamcity/");
      break;
    case 'fill spacefree':
      window.open("https://www.jetbrains.com/space/buy/");
      break;
    case 'fill docker_desktop':
      window.open("https://www.docker.com/products/docker-desktop/");
      break;
    case 'fill jetbrains-pricing':
      window.open("https://www.jetbrains.com/store/#commercial");
      break;
    case 'fill docker':
      window.open("https://www.docker.com/pricing/");
      break;
  }
};

function pricing(ele) {
  var id = ele.id;
  Swal.fire({
    title: "Pricing & Subscriptions 💲",
    html:
      'Pricing for various development tools varies monthly/yearly and is <strong>charged back to the requestor business unit.</strong> Choose the best one for you!<br/><br/></br>' +
      '<a id="fill jetbrains-pricing" class="fill" onclick="hrefs(this);">' +
      'JetBrains Products' +
      '</a></br></br></br>' +
      '<a id="fill docker"  class="fill" onclick="hrefs(this);">' +
      'Docker Desktop' +
      '</a></br></br></br>',
    // type: "warning",
    imageUrl: 'https://thumbs.dreamstime.com/b/sticker-cartoon-dollar-symbol-illustrated-146086201.jpg',
    imageHeight: 175,
    imageWidth: 175,
    timer: 6000
  }).then(
    function (dismiss) {
      if (dismiss === 'timer') {
        console.log('I was closed by the timer')
      }
    })
}