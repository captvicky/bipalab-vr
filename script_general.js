(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"minWidth":0,"watermark":false,"gap":10,"id":"rootPlayer","start":"this.playAudioList([this.audio_0511B22E_3E8D_8A84_41A7_96B50CB15E9B], true); this.init()","data":{"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false},"history":{},"name":"Player793","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"backgroundColor":["#000000"],"scripts":{"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoBack":TDV.Tour.Script.historyGoBack,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"enableVR":TDV.Tour.Script.enableVR,"getOverlays":TDV.Tour.Script.getOverlays,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"clone":TDV.Tour.Script.clone,"setLocale":TDV.Tour.Script.setLocale,"disableVR":TDV.Tour.Script.disableVR,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"initAnalytics":TDV.Tour.Script.initAnalytics,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPixels":TDV.Tour.Script.getPixels,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"existsKey":TDV.Tour.Script.existsKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"startMeasurement":TDV.Tour.Script.startMeasurement,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setValue":TDV.Tour.Script.setValue,"executeJS":TDV.Tour.Script.executeJS,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"initQuiz":TDV.Tour.Script.initQuiz,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isPanorama":TDV.Tour.Script.isPanorama,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMainViewer":TDV.Tour.Script.getMainViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizStart":TDV.Tour.Script.quizStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizFinish":TDV.Tour.Script.quizFinish,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"mixObject":TDV.Tour.Script.mixObject,"textToSpeech":TDV.Tour.Script.textToSpeech,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"cloneBindings":TDV.Tour.Script.cloneBindings,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"createTween":TDV.Tour.Script.createTween,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"translate":TDV.Tour.Script.translate,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject},"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"class":"Player","hash": "efd992ec2fa2c5b80eede8fdbf8eee8a8e6484a78a4868b909f5a83e0d893def", "definitions": [{"class":"VideoPlayer","displayPlayOverlay":true,"viewerArea":"this.MainViewer","clickAction":"play_pause","id":"MainViewerVideoPlayer","displayPlaybackBar":true},{"items":[{"class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.MainViewerVideoPlayer.set('displayPlayOverlay', false); this.MainViewerVideoPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","media":"this.video_0C075986_3E7C_B984_41CA_E5176F6BBB51","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","media":"this.panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C","begin":"this.executeAudioAction([this.audio_0609EC06_3E8C_9E84_41A2_2AE6D0756D73],'play',this.panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C,true,true,false); this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"data":{"label":"backsound lobby"},"class":"MediaAudio","audio":"this.audiores_0DEB57B7_3E8D_8984_41A3_92F783CF9EBE","autoplay":true,"id":"audio_0609EC06_3E8C_9E84_41A2_2AE6D0756D73"},{"label":trans('video_0C075986_3E7C_B984_41CA_E5176F6BBB51.label'),"class":"Video","data":{"label":"teaser oghe"},"width":854,"height":480,"thumbnailUrl":"media/video_0C075986_3E7C_B984_41CA_E5176F6BBB51_t.jpg","id":"video_0C075986_3E7C_B984_41CA_E5176F6BBB51","video":"this.VideoResource_0E485D74_3E7C_7E85_41BD_DF14606E6387"},{"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true},{"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","hfov":115,"yaw":-22.34}},{"label":trans('panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C.label'),"class":"Panorama","hfovMax":130,"hfov":360,"thumbnailUrl":"media/panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_t.jpg","data":{"label":"light"},"vfov":180,"overlays":["this.overlay_324F7EF7_3CDC_ECF8_41AE_C7D8F67D6928","this.overlay_2C3F60E1_3CDF_F318_41C0_02D37FB79703","this.overlay_2C5B922C_3CDD_976F_41CA_263A921F2DF6","this.overlay_2DDF82F2_3CDD_94FB_41B7_DE0C6E1A0490","this.overlay_2D5F64D1_3CDB_9338_41C1_8C6043844A11","this.overlay_2C56E84B_3CD7_7329_41AD_010CDCC51B7C","this.overlay_2E9412DA_3CCB_F72B_41C6_8B98CEE18CD7","this.overlay_2DDFE246_3CCC_9718_41C1_88E0E1794ED4","this.overlay_2C1E3F0F_3CCF_ED29_41BA_611DC9629BCB","this.overlay_2C40B8CE_3CF4_B328_41CB_9C449283A2BD","this.overlay_2AD8BECE_3CDC_AF28_41CA_D7BFC4399A7B","this.overlay_24EC733F_3CDC_9569_41C5_920D8BD776E2","this.overlay_2AB73DF6_3CDF_6CFB_41A5_87A696678ADB","this.overlay_11BC7085_3E74_8787_41C9_623FC7B11568","this.overlay_0AB161A0_3E8D_89BD_41C2_FEB9A976CA36"],"id":"panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_t.jpg","cube":{"class":"ImageResource","levels":[{"width":24576,"url":"media/panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":8,"height":4096,"colCount":48,"tags":"ondemand"},{"width":12288,"url":"media/panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":4,"height":2048,"colCount":24,"tags":"ondemand"},{"width":6144,"url":"media/panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"url":"media/panorama_3169D7F2_3CD5_9CF9_41CA_ED386B2AF19C_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"height":512,"colCount":6,"tags":["ondemand","preload"]}]}}]},{"surfaceReticleColor":"#FFFFFF","width":"100%","height":"100%","toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderRadius":2,"progressLeft":"33%","vrPointerSelectionTime":2000,"playbackBarBottom":5,"toolTipFontFamily":"Arial","toolTipFontSize":"1.11vmin","subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"subtitlesFontSize":"3vmin","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","firstTransitionDuration":0,"playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"data":{"name":"Main Viewer"},"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"progressBackgroundColorRatios":[0],"progressRight":"33%","vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"id":"MainViewer","progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBorderColor":"#000000","progressOpacity":0.7,"playbackBarBorderRadius":0,"toolTipTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","progressBarBorderColor":"#000000","playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"subtitlesFontFamily":"Arial","playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","playbackBarBorderSize":0,"propagateClick":false,"subtitlesTop":0,"progressBorderSize":0,"progressBottom":10,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarHeadShadow":true,"progressBarBorderSize":0,"playbackBarHeadBorderSize":0,"subtitlesGap":0,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","minHeight":50,"subtitlesTextShadowColor":"#000000","minWidth":100},{"data":{"label":"The Trader Sound"},"class":"MediaAudio","audio":"this.audiores_0A04639C_3E8D_8985_41B4_5BA1C278DCF1","autoplay":true,"id":"audio_0511B22E_3E8D_8A84_41A7_96B50CB15E9B"},{"class":"AudioResource","id":"audiores_0DEB57B7_3E8D_8984_41A3_92F783CF9EBE","mp3Url":trans('audiores_0DEB57B7_3E8D_8984_41A3_92F783CF9EBE.mp3Url')},{"width":854,"class":"VideoResource","id":"VideoResource_0E485D74_3E7C_7E85_41BD_DF14606E6387","levels":["this.videolevel_0DACFC69_3E95_BE8C_41C1_66E1B480F340","this.videolevel_0DC012A7_3E95_8B84_41C3_EFF5EA722AD5"],"height":480},{"items":["this.HotspotPanoramaOverlayTextImage_3247DEF3_3CDC_ECF8_41BC_2E447920965F"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_324F7EF7_3CDC_ECF8_41AE_C7D8F67D6928","areas":["this.HotspotPanoramaOverlayArea_32375F3A_3CDC_ED6B_41A6_F5EC1D07A46A"]},{"items":["this.HotspotPanoramaOverlayTextImage_2C3A00E4_3CDF_F318_41B2_8B2C94F60390"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2C3F60E1_3CDF_F318_41C0_02D37FB79703","areas":["this.HotspotPanoramaOverlayArea_2C2670EC_3CDF_F4E8_41CA_21860EF97894"]},{"items":["this.HotspotPanoramaOverlayTextImage_2C58B22D_3CDD_9769_41C4_DC36C5FB98FC"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2C5B922C_3CDD_976F_41CA_263A921F2DF6","areas":["this.HotspotPanoramaOverlayArea_2C58022D_3CDD_9769_41C3_37356C2D854E"]},{"items":["this.HotspotPanoramaOverlayTextImage_2DDC42F3_3CDD_94F9_4191_C45A051ABC9C"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2DDF82F2_3CDD_94FB_41B7_DE0C6E1A0490","areas":["this.HotspotPanoramaOverlayArea_2DDC62F3_3CDD_94F9_41A7_1D32B3977320"]},{"items":["this.HotspotPanoramaOverlayTextImage_2D5FE4D1_3CDB_9338_418E_C355DF561137"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2D5F64D1_3CDB_9338_41C1_8C6043844A11","areas":["this.HotspotPanoramaOverlayArea_2D4AE4FA_3CDB_9CEB_41B1_CEDD04674338"]},{"items":["this.HotspotPanoramaOverlayTextImage_2C57C84A_3CD7_732B_41CE_143A162D49B8"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2C56E84B_3CD7_7329_41AD_010CDCC51B7C","areas":["this.HotspotPanoramaOverlayArea_2C4B7858_3CD7_7337_41B3_4AD3B7540A65"]},{"items":["this.HotspotPanoramaOverlayTextImage_2E9402DA_3CCB_F72B_4192_AFE0910DE503"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2E9412DA_3CCB_F72B_41C6_8B98CEE18CD7","areas":["this.HotspotPanoramaOverlayArea_2E8BB2DB_3CCB_F729_41BC_B76DA762E203"]},{"items":["this.HotspotPanoramaOverlayTextImage_2DDFF246_3CCC_9718_41B6_E2C548EB08EB"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2DDFE246_3CCC_9718_41C1_88E0E1794ED4","areas":["this.HotspotPanoramaOverlayArea_2DD85246_3CCC_9718_41B4_CEA73DED75A5"]},{"items":["this.HotspotPanoramaOverlayTextImage_2C1E2F0F_3CCF_ED29_41C1_13EEFEF2280E"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2C1E3F0F_3CCF_ED29_41BA_611DC9629BCB","areas":["this.HotspotPanoramaOverlayArea_2C1E5F0F_3CCF_ED29_41BD_1E5BAF410C4F"]},{"items":[{"image":"this.res_2D1AFAD8_3CF5_7728_41B6_5ECB341A1B32","class":"QuadHotspotPanoramaOverlayImage","vertices":[{"pitch":-15.26,"class":"PanoramaPoint","yaw":-39.06},{"pitch":-15.33,"class":"PanoramaPoint","yaw":-6.63},{"pitch":-45.33,"class":"PanoramaPoint","yaw":-0.55},{"pitch":-45.07,"class":"PanoramaPoint","yaw":-45.27}],"data":{"label":"GAMBAR OGHE"},"distance":50}],"enabledInCardboard":true,"maps":[],"data":{"label":"GAMBAR OGHE"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2C40B8CE_3CF4_B328_41CB_9C449283A2BD","areas":["this.HotspotPanoramaOverlayArea_2C4418D1_3CF4_B338_41C0_C8852FF47092"]},{"items":["this.HotspotPanoramaOverlayTextImage_2ADFEECD_3CDC_AF29_41B9_3D55CC2AB626"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2AD8BECE_3CDC_AF28_41CA_D7BFC4399A7B","areas":["this.HotspotPanoramaOverlayArea_2ADA0ECF_3CDC_AF28_4191_4BE125CCA55E"]},{"items":["this.HotspotPanoramaOverlayTextImage_24EDB33F_3CDC_9569_41A7_7588A82F294A"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_24EC733F_3CDC_9569_41C5_920D8BD776E2","areas":["this.HotspotPanoramaOverlayArea_24E9934D_3CDC_9529_41CA_8A0CBE64AD48"]},{"items":["this.HotspotPanoramaOverlayTextImage_2AB42DF5_3CDF_6CF9_41CC_963DFBC6B779"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_2AB73DF6_3CDF_6CFB_41A5_87A696678ADB","areas":["this.HotspotPanoramaOverlayArea_2AB0ADF9_3CDF_6CE9_41C7_CC00E3541802"]},{"items":["this.HotspotPanoramaOverlayTextImage_11BDF086_3E74_8785_41AD_2DE0EA822AE4"],"enabledInCardboard":true,"maps":[],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_11BC7085_3E74_8787_41C9_623FC7B11568","areas":["this.HotspotPanoramaOverlayArea_11BDB086_3E74_8785_41CA_521923A8D8BA"]},{"pitch":60.37,"class":"LensFlarePanoramaOverlay","yaw":23.2,"bleachingDistance":0.35,"id":"overlay_0AB161A0_3E8D_89BD_41C2_FEB9A976CA36","bleaching":0.75},{"class":"AudioResource","id":"audiores_0A04639C_3E8D_8985_41B4_5BA1C278DCF1","mp3Url":trans('audiores_0A04639C_3E8D_8985_41B4_5BA1C278DCF1.mp3Url')},{"bitrate":146,"width":853,"url":trans('videolevel_0DACFC69_3E95_BE8C_41C1_66E1B480F340.url'),"class":"VideoResourceLevel","type":"application/x-mpegurl","posterURL":trans('videolevel_0DACFC69_3E95_BE8C_41C1_66E1B480F340.posterURL'),"height":480,"id":"videolevel_0DACFC69_3E95_BE8C_41C1_66E1B480F340","framerate":30},{"bitrate":146,"width":854,"url":trans('videolevel_0DC012A7_3E95_8B84_41C3_EFF5EA722AD5.url'),"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_0DC012A7_3E95_8B84_41C3_EFF5EA722AD5.posterURL'),"height":480,"class":"VideoResourceLevel","id":"videolevel_0DC012A7_3E95_8B84_41C3_EFF5EA722AD5","framerate":30},{"image":{"class":"ImageResource","levels":["this.imlevel_2EE6AC13_3CF5_7338_41CC_CF69DB37E6DB"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_3247DEF3_3CDC_ECF8_41BC_2E447920965F","class":"HotspotPanoramaOverlayImage","pitch":15.65,"yaw":113.9,"data":{"label":"Text"},"hfov":30.95},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_32375F3A_3CDC_ED6B_41A6_F5EC1D07A46A","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_0FC8760D_3E77_8A84_41C9_61E8D90BDC80"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2C3A00E4_3CDF_F318_41B2_8B2C94F60390","class":"HotspotPanoramaOverlayImage","pitch":15.72,"yaw":21.72,"data":{"label":"Text"},"hfov":26.33},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2C2670EC_3CDF_F4E8_41CA_21860EF97894","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_2E599DB1_3CF5_6D78_41CC_0FEC85B1780C"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2C58B22D_3CDD_9769_41C4_DC36C5FB98FC","class":"HotspotPanoramaOverlayImage","pitch":6.59,"yaw":-156.92,"data":{"label":"Text"},"hfov":22.35},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2C58022D_3CDD_9769_41C3_37356C2D854E","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_2E5FBE39_3CF5_6F69_4187_A10BFED924B1"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2DDC42F3_3CDD_94F9_4191_C45A051ABC9C","class":"HotspotPanoramaOverlayImage","pitch":15.73,"yaw":-67.85,"data":{"label":"Text"},"hfov":26.33},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2DDC62F3_3CDD_94F9_41A7_1D32B3977320","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_2E5DDEDB_3CF5_6F29_41B7_980DF5613233"]},"vfov":5.51,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2D5FE4D1_3CDB_9338_418E_C355DF561137","class":"HotspotPanoramaOverlayImage","pitch":8.28,"yaw":-22.84,"data":{"label":"Text"},"hfov":44.48},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2D4AE4FA_3CDB_9CEB_41B1_CEDD04674338","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_0ED583B4_3E8D_8986_41BB_C58671F4127E"]},"vfov":17.2,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2C57C84A_3CD7_732B_41CE_143A162D49B8","class":"HotspotPanoramaOverlayImage","pitch":-0.63,"yaw":-22.67,"data":{"label":"Text"},"hfov":44.46},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2C4B7858_3CD7_7337_41B3_4AD3B7540A65","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_281F9239_3CF5_9768_41A7_045B89387C77"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2E9402DA_3CCB_F72B_4192_AFE0910DE503","class":"HotspotPanoramaOverlayImage","pitch":15.22,"yaw":-156.83,"data":{"label":"Text"},"hfov":31.46},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2E8BB2DB_3CCB_F729_41BC_B76DA762E203","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_2F9DC316_3CF5_953B_41C4_70CEDAB485E3"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2DDFF246_3CCC_9718_41B6_E2C548EB08EB","class":"HotspotPanoramaOverlayImage","pitch":7.81,"yaw":-67.65,"data":{"label":"Text"},"hfov":22.35},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2DD85246_3CCC_9718_41B4_CEA73DED75A5","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_2F63A39B_3CF5_9529_41C1_7EC8CA57B6F6"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_2C1E2F0F_3CCF_ED29_41C1_13EEFEF2280E","class":"HotspotPanoramaOverlayImage","pitch":7.94,"yaw":113.92,"data":{"label":"Text"},"hfov":22.35},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2C1E5F0F_3CCF_ED29_41BD_1E5BAF410C4F","mapColor":"any"},{"class":"ImageResource","id":"res_2D1AFAD8_3CF5_7728_41B6_5ECB341A1B32","levels":[{"width":744,"url":"media/res_2D1AFAD8_3CF5_7728_41B6_5ECB341A1B32_0.jpg","class":"ImageResourceLevel","height":757}]},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2C4418D1_3CF4_B338_41C0_C8852FF47092","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_2901EA5D_3CDC_B728_41BB_23CB476D9FCB"]},"vfov":4.11,"hfov":35.44,"distance":50,"class":"HotspotPanoramaOverlayImage","roll":-0.36,"pitch":-49.27,"yaw":-23.03,"data":{"label":"Text"},"id":"HotspotPanoramaOverlayTextImage_2ADFEECD_3CDC_AF29_41B9_3D55CC2AB626"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2ADA0ECF_3CDC_AF28_4191_4BE125CCA55E","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_288F6AFE_3CDC_B4E8_41C6_5BB667908FC3"]},"vfov":3.57,"hfov":28.86,"distance":50,"class":"HotspotPanoramaOverlayImage","roll":-0.71,"pitch":-52.67,"yaw":-23.26,"data":{"label":"Text"},"id":"HotspotPanoramaOverlayTextImage_24EDB33F_3CDC_9569_41A7_7588A82F294A"},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_24E9934D_3CDC_9529_41CA_8A0CBE64AD48","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_288D2B77_3CDC_B5F8_41B7_8F14BDEF34BF"]},"distance":50,"class":"HotspotPanoramaOverlayImage","roll":-1.14,"id":"HotspotPanoramaOverlayTextImage_2AB42DF5_3CDF_6CF9_41CC_963DFBC6B779","pitch":-55.25,"yaw":-23.68,"data":{"label":"Text"},"hfov":18.77,"vfov":2.87,"rotationY":-2.6},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_2AB0ADF9_3CDF_6CE9_41C7_CC00E3541802","mapColor":"any"},{"image":{"class":"ImageResource","levels":["this.imlevel_0E950939_3E77_868C_41BC_2BBB878CBF8E"]},"vfov":6,"distance":50,"id":"HotspotPanoramaOverlayTextImage_11BDF086_3E74_8785_41AD_2DE0EA822AE4","class":"HotspotPanoramaOverlayImage","pitch":7.83,"yaw":21.66,"data":{"label":"Text"},"hfov":22.35},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_11BDB086_3E74_8785_41CA_521923A8D8BA","mapColor":"any"},{"width":2063.22,"url":trans('imlevel_2EE6AC13_3CF5_7338_41CC_CF69DB37E6DB.url'),"class":"ImageResourceLevel","height":390.59,"id":"imlevel_2EE6AC13_3CF5_7338_41CC_CF69DB37E6DB"},{"width":1755.65,"url":trans('imlevel_0FC8760D_3E77_8A84_41C9_61E8D90BDC80.url'),"class":"ImageResourceLevel","height":393.3,"id":"imlevel_0FC8760D_3E77_8A84_41C9_61E8D90BDC80"},{"width":1490.19,"url":trans('imlevel_2E599DB1_3CF5_6D78_41CC_0FEC85B1780C.url'),"class":"ImageResourceLevel","height":395.28,"id":"imlevel_2E599DB1_3CF5_6D78_41CC_0FEC85B1780C"},{"width":1755.65,"url":trans('imlevel_2E5FBE39_3CF5_6F69_4187_A10BFED924B1.url'),"class":"ImageResourceLevel","height":393.3,"id":"imlevel_2E5FBE39_3CF5_6F69_4187_A10BFED924B1"},{"width":2965.58,"url":trans('imlevel_2E5DDEDB_3CF5_6F29_41B7_980DF5613233.url'),"class":"ImageResourceLevel","height":348.98,"id":"imlevel_2E5DDEDB_3CF5_6F29_41B7_980DF5613233"},{"width":2963.74,"url":trans('imlevel_0ED583B4_3E8D_8986_41BB_C58671F4127E.url'),"class":"ImageResourceLevel","height":1096.61,"id":"imlevel_0ED583B4_3E8D_8986_41BB_C58671F4127E"},{"width":2097.15,"url":trans('imlevel_281F9239_3CF5_9768_41A7_045B89387C77.url'),"class":"ImageResourceLevel","height":390.26,"id":"imlevel_281F9239_3CF5_9768_41A7_045B89387C77"},{"width":1490.19,"url":trans('imlevel_2F9DC316_3CF5_953B_41C4_70CEDAB485E3.url'),"class":"ImageResourceLevel","height":395.28,"id":"imlevel_2F9DC316_3CF5_953B_41C4_70CEDAB485E3"},{"width":1490.19,"url":trans('imlevel_2F63A39B_3CF5_9529_41C1_7EC8CA57B6F6.url'),"class":"ImageResourceLevel","height":395.28,"id":"imlevel_2F63A39B_3CF5_9529_41C1_7EC8CA57B6F6"},{"width":2362.53,"url":trans('imlevel_2901EA5D_3CDC_B728_41BB_23CB476D9FCB.url'),"class":"ImageResourceLevel","height":265.4,"id":"imlevel_2901EA5D_3CDC_B728_41BB_23CB476D9FCB"},{"width":1923.84,"url":trans('imlevel_288F6AFE_3CDC_B4E8_41C6_5BB667908FC3.url'),"class":"ImageResourceLevel","height":233.13,"id":"imlevel_288F6AFE_3CDC_B4E8_41C6_5BB667908FC3"},{"width":1251.33,"url":trans('imlevel_288D2B77_3CDC_B5F8_41B7_8F14BDEF34BF.url'),"class":"ImageResourceLevel","height":189.69,"id":"imlevel_288D2B77_3CDC_B5F8_41B7_8F14BDEF34BF"},{"width":1490.19,"url":trans('imlevel_0E950939_3E77_868C_41BC_2BBB878CBF8E.url'),"class":"ImageResourceLevel","height":395.28,"id":"imlevel_0E950939_3E77_868C_41BC_2BBB878CBF8E"}],"propagateClick":false,"width":"100%","scrollBarMargin":2,"height":"100%","backgroundColorRatios":[0],"layout":"absolute","minHeight":0,"children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Wed Feb 26 2025