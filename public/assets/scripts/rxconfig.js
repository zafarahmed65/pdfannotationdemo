var RxConfig = (function() {
    'use strict';

    /* server connect */
    var gui360URL = "rxweb/";

    var baseURL = "http://viewserver.rasterex.com/";

    var baseURLBin = baseURL + "RxBinWeb/";
    var baseURLWeb = baseURL + "rxweb/";
    var baseURLBinWeb = baseURL + "RxBinweb";

    var xmlurl = baseURLBin + "RxCSISAPI.dll?WebClientPublish";
    var xmlurldirect = baseURLBin + "RxCSISAPI.dll";
    var xmlurlmarkup = baseURLBin + "RxCSISAPI.dll?WebClientPublish";
    var opensessionurl = baseURLBin + "RxCSISAPI.dll?OpenSession";
    var openUsessionurl = baseURLBin + "RxCSISAPI.dll?OpenSessionUser";
    var openUsessionurlEx = baseURLBin + "RxCSISAPI.dll?OpenSessionUserEx";
    var openMsessionurl = baseURLBin + "RxCSISAPI.dll?OpenMarkupSession";
    var closesessionurl = baseURLBin + "RxCSISAPI.dll?CloseSession";
    var xmlurlmarkupsave = baseURLBin + "RxCSISAPI.dll?WebClientSaveMarkup";
    var markupsave = baseURLBin + "RxCSISAPI.dll?MarkupSave";
    var savefile = baseURLBin + "RxCSISAPI.dll?WebClientSaveFile";

    var FileuploadURL = baseURLBin + "RxCSISAPI.dll?WebClientFileUpload";
    var PDFExportURL = baseURLBin + "RxCSISAPI.dll?WebClientSaveAs";
    var PDFExportPageURL = baseURLBin + "RxCSISAPI.dll?WebClientSavePageAs"; 

    var PDFPrintPrepare = baseURLBin + "RxCSISAPI.dll?PDFPrintPrepare";
    var PDFPrintCreate = baseURLBin + "RxCSISAPI.dll?PDFPrintCreate";


    var CanvasSaveUrl = baseURLBin + "RxCSISAPI.dll?WebClientSaveImageAs";
    var UploadServerfolder = "C:\\Rasterex\\Upload\\";
    var UploadServerfolderd = "C:\\\\Rasterex\\\\Upload\\\\";
    var xmlurlrel = baseURLBinWeb;
    var xmlurlrelmarkup = baseURLBinWeb;
    var uploadfolderURL = baseURLWeb + "Upload/";
    var htmlviewerurl = baseURLWeb + "default.htm";
    var splashscreen = baseURL + "rxweb/welcome.jpg";
    var noteImgSrc = baseURL + "rxweb/images/note.png";
    var PDFcmap = baseURLWeb + "pdfjs/web/cmaps/";

    var baseFileURL = "C:\\\\Rasterex\\\\Upload\\\\";

    var PDFLib = baseURLWeb + "pdfjs/build/pdf.js";
    var PDFWorker = baseURLWeb + "pdfjs/build/pdf.worker.js";


    /* config */

    //"http://viewserver.rasterex.com/RxBinweb/RxCSISAPI.dll?WebClientGetConfig";

    var configurationLocation = baseURLBin + "RxCSISAPI.dll?WebClientGetConfig";
    var bGetconfig = true;
    var bUseID = false;
    var noCachFolder = false;

    var serverComparefiles = baseURLBin + "RxCSISAPI.dll?CommandJSON";

    var putSignature = baseURLBin + "RxCSISAPI.dll?WebClientPutSignature";
    var getSignature = baseURLBin + "RxCSISAPI.dll?WebClientGetSignature";

    var putInitial = baseURLBin + "RxCSISAPI.dll?WebClientPutInitial";
    var getInitial = baseURLBin + "RxCSISAPI.dll?WebClientGetInitial";

    return {
        xmlurl: xmlurl,
	      xmlurldirect : xmlurldirect,
        xmlurlmarkup : xmlurlmarkup,
        opensessionurl: opensessionurl,
          openUsessionurl : openUsessionurl,
          openUsessionurlEx : openUsessionurlEx,
        openMsessionurl: openMsessionurl,
        closesessionurl: closesessionurl,
        xmlurlmarkupsave: xmlurlmarkupsave,
        markupsave : markupsave,
        savefile : savefile,
        FileuploadURL: FileuploadURL,
        PDFExportURL: PDFExportURL,
        PDFExportPageURL : PDFExportPageURL,
        PDFPrintPrepare : PDFPrintPrepare,
        PDFPrintCreate : PDFPrintCreate,
        CanvasSaveUrl: CanvasSaveUrl,
        UploadServerfolder: UploadServerfolder,
        UploadServerfolderd: UploadServerfolderd,
        baseFileURL: baseFileURL,
        baseURLWeb : baseURLWeb,
        xmlurlrel: xmlurlrel,
        xmlurlrelmarkup : xmlurlrelmarkup,
        uploadfolderURL: uploadfolderURL,
        htmlviewerurl: htmlviewerurl,
        splashscreen: splashscreen,
        noteImgSrc : noteImgSrc,
        PDFcmap : PDFcmap,
        PDFLib : PDFLib,
        PDFWorker : PDFWorker,
        bGetconfig: bGetconfig,
        bUseID : bUseID,
        noCachFolder : noCachFolder,
        configurationLocation: configurationLocation,
        serverComparefiles: serverComparefiles,
        putSignature : putSignature,
        getSignature : getSignature,
        putInitial : putInitial,
        getInitial : getInitial,
    };

})();
