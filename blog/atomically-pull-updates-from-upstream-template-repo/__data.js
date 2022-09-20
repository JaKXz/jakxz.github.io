window.__sveltekit_data = (function(a,b){return {type:b,nodes:[null,{type:b,data:{PostContent:"\u003Cp\u003EEarlier this year I helped improve a template repo 3rd party Shopify developers use to build apps.\nAs we were working on the updates to the app app template in a separate branch from \u003Ccode\u003Emain\u003C\u002Fcode\u003E, here’s what I suggested to those who wanted to test out our changes early:\u003C\u002Fp\u003E\n\u003Col\u003E\u003Cli\u003EAdd \u003Ccode\u003E.diff\u003C\u002Fcode\u003E to the end of a github PR url\u003C\u002Fli\u003E\n\u003Cli\u003EVisit that link - copy the link you are redirected to\u003C\u002Fli\u003E\n\u003Cli\u003EApply the changes via \u003Ccode\u003Ecurl\u003C\u002Fcode\u003E &amp; \u003Ccode\u003Egit\u003C\u002Fcode\u003E, e.g. for \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FShopify\u002Fshopify-app-node\u002Fpull\u002F726.diff\" rel=\"nofollow\"\u003Ehttps:\u002F\u002Fgithub.com\u002FShopify\u002Fshopify-app-node\u002Fpull\u002F726.diff\u003C\u002Fa\u003E:\u003C\u002Fli\u003E\u003C\u002Fol\u003E\n\u003Cpre class=\"language-sh\"\u003E\u003C!-- HTML_TAG_START --\u003E\u003Ccode class=\"language-sh\"\u003E\u003Cspan class=\"token function\"\u003Ecurl\u003C\u002Fspan\u003E https:\u002F\u002Fpatch-diff.githubusercontent.com\u002Fraw\u002FShopify\u002Fshopify-app-node\u002Fpull\u002F\u003Cspan class=\"token operator\"\u003E&lt;\u003C\u002Fspan\u003EPR number\u003Cspan class=\"token operator\"\u003E\u003E\u003C\u002Fspan\u003E.diff \u003Cspan class=\"token operator\"\u003E|\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003Egit\u003C\u002Fspan\u003E apply\n\u003Cspan class=\"token function\"\u003Egit\u003C\u002Fspan\u003E checkout \u003Cspan class=\"token parameter variable\"\u003E-b\u003C\u002Fspan\u003E get-fix-or-feature-from-shopify\n\u003Cspan class=\"token comment\"\u003E# and so on\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C!-- HTML_TAG_END --\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EYour mileage may vary with this especially if you re-arrange files differently than the original template repo, and of course it depends on the authors following “atomic PR” best practices.\nHopefully this is still useful to you to pull down upstream changes and to try to incorporate them in your local environment.\nGood luck!\u003C\u002Fp\u003E\n\u003Chr\u003E\n\u003Cp\u003EOriginally shared here: \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FShopify\u002Fshopify-app-template-node\u002Fissues\u002F725#issuecomment-1062308480\" rel=\"nofollow\"\u003Ehttps:\u002F\u002Fgithub.com\u002FShopify\u002Fshopify-app-template-node\u002Fissues\u002F725#issuecomment-1062308480\u003C\u002Fa\u003E\u003C\u002Fp\u003E",meta:{title:"Atomically pull updates from an upstream template repo",date:"2022-03-08",updated:"2022-09-20",categories:["github","git","dev"],slug:"atomically-pull-updates-from-upstream-template-repo",coverCaption:a,imageAlt:a}},uses:{dependencies:a,params:["post"],parent:a,url:a}}]}}(void 0,"data"))