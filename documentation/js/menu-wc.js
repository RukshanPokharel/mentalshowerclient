'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">MentalShowerClient documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminPageModule.html" data-type="entity-link" >AdminPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminPageModule-13c696ec3c2fd1e5a28199ac93ad6a2a7e50c97ea8e0381e2e6ba7f138785ca10e1b1f3f862c664a3f3f2ba2a8309f14100a2d703819ea8c47acd8ca85bd2f70"' : 'data-target="#xs-components-links-module-AdminPageModule-13c696ec3c2fd1e5a28199ac93ad6a2a7e50c97ea8e0381e2e6ba7f138785ca10e1b1f3f862c664a3f3f2ba2a8309f14100a2d703819ea8c47acd8ca85bd2f70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPageModule-13c696ec3c2fd1e5a28199ac93ad6a2a7e50c97ea8e0381e2e6ba7f138785ca10e1b1f3f862c664a3f3f2ba2a8309f14100a2d703819ea8c47acd8ca85bd2f70"' :
                                            'id="xs-components-links-module-AdminPageModule-13c696ec3c2fd1e5a28199ac93ad6a2a7e50c97ea8e0381e2e6ba7f138785ca10e1b1f3f862c664a3f3f2ba2a8309f14100a2d703819ea8c47acd8ca85bd2f70"' }>
                                            <li class="link">
                                                <a href="components/AdminPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPageRoutingModule.html" data-type="entity-link" >AdminPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d249a2cac56cfb8306e806a56fd5f277fb92faaa97550d2d3788cfc276b2a71d5a6ea11af86a3f67b55d09a1f6ba09e485e34e2d4b4a54f493ee0757eed81605"' : 'data-target="#xs-components-links-module-AppModule-d249a2cac56cfb8306e806a56fd5f277fb92faaa97550d2d3788cfc276b2a71d5a6ea11af86a3f67b55d09a1f6ba09e485e34e2d4b4a54f493ee0757eed81605"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d249a2cac56cfb8306e806a56fd5f277fb92faaa97550d2d3788cfc276b2a71d5a6ea11af86a3f67b55d09a1f6ba09e485e34e2d4b4a54f493ee0757eed81605"' :
                                            'id="xs-components-links-module-AppModule-d249a2cac56cfb8306e806a56fd5f277fb92faaa97550d2d3788cfc276b2a71d5a6ea11af86a3f67b55d09a1f6ba09e485e34e2d4b4a54f493ee0757eed81605"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-ce9b5dca0c7750d888d24d145c139adbc65c4ef8d74b9328862d0b1aaf42ada700eac398d5c2babcbab578a73a69cb06473f8ca89c54d7902cfff9fd41f154bc"' : 'data-target="#xs-components-links-module-HomePageModule-ce9b5dca0c7750d888d24d145c139adbc65c4ef8d74b9328862d0b1aaf42ada700eac398d5c2babcbab578a73a69cb06473f8ca89c54d7902cfff9fd41f154bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-ce9b5dca0c7750d888d24d145c139adbc65c4ef8d74b9328862d0b1aaf42ada700eac398d5c2babcbab578a73a69cb06473f8ca89c54d7902cfff9fd41f154bc"' :
                                            'id="xs-components-links-module-HomePageModule-ce9b5dca0c7750d888d24d145c139adbc65c4ef8d74b9328862d0b1aaf42ada700eac398d5c2babcbab578a73a69cb06473f8ca89c54d7902cfff9fd41f154bc"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputPageModule.html" data-type="entity-link" >InputPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputPageModule-6ea2e7322e01004a4e2226fcc5154a133f0b9351a62b6cd7d48ce225b38211a1660b63e4db4888d7d71096f7d6a5f11259a49d938a8d3fe742659f22e6c4b4f6"' : 'data-target="#xs-components-links-module-InputPageModule-6ea2e7322e01004a4e2226fcc5154a133f0b9351a62b6cd7d48ce225b38211a1660b63e4db4888d7d71096f7d6a5f11259a49d938a8d3fe742659f22e6c4b4f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputPageModule-6ea2e7322e01004a4e2226fcc5154a133f0b9351a62b6cd7d48ce225b38211a1660b63e4db4888d7d71096f7d6a5f11259a49d938a8d3fe742659f22e6c4b4f6"' :
                                            'id="xs-components-links-module-InputPageModule-6ea2e7322e01004a4e2226fcc5154a133f0b9351a62b6cd7d48ce225b38211a1660b63e4db4888d7d71096f7d6a5f11259a49d938a8d3fe742659f22e6c4b4f6"' }>
                                            <li class="link">
                                                <a href="components/InputPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayquizComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayquizComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputPageRoutingModule.html" data-type="entity-link" >InputPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntroModalPageModule.html" data-type="entity-link" >IntroModalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntroModalPageModule-d22a18dfb331875e5e1527dabeb64ed53d9cd85c0597413549145412c06f384ea35d572661eef1d6f6e3925fd1004e1ca635bb74bf2348af75ca25604ade562e"' : 'data-target="#xs-components-links-module-IntroModalPageModule-d22a18dfb331875e5e1527dabeb64ed53d9cd85c0597413549145412c06f384ea35d572661eef1d6f6e3925fd1004e1ca635bb74bf2348af75ca25604ade562e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntroModalPageModule-d22a18dfb331875e5e1527dabeb64ed53d9cd85c0597413549145412c06f384ea35d572661eef1d6f6e3925fd1004e1ca635bb74bf2348af75ca25604ade562e"' :
                                            'id="xs-components-links-module-IntroModalPageModule-d22a18dfb331875e5e1527dabeb64ed53d9cd85c0597413549145412c06f384ea35d572661eef1d6f6e3925fd1004e1ca635bb74bf2348af75ca25604ade562e"' }>
                                            <li class="link">
                                                <a href="components/IntroModalPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntroModalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntroModalPageRoutingModule.html" data-type="entity-link" >IntroModalPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-810f86b7283e5522995d6b6df6f31a7cee62feac1144766ef4d17bb0f83b69312820fd398e7b8a079bef47918ac9a632a53fcebf19c13166efff051ab1d8a6fc"' : 'data-target="#xs-components-links-module-LoginPageModule-810f86b7283e5522995d6b6df6f31a7cee62feac1144766ef4d17bb0f83b69312820fd398e7b8a079bef47918ac9a632a53fcebf19c13166efff051ab1d8a6fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-810f86b7283e5522995d6b6df6f31a7cee62feac1144766ef4d17bb0f83b69312820fd398e7b8a079bef47918ac9a632a53fcebf19c13166efff051ab1d8a6fc"' :
                                            'id="xs-components-links-module-LoginPageModule-810f86b7283e5522995d6b6df6f31a7cee62feac1144766ef4d17bb0f83b69312820fd398e7b8a079bef47918ac9a632a53fcebf19c13166efff051ab1d8a6fc"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoomPageModule.html" data-type="entity-link" >RoomPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomPageModule-6a775e8d0158929e9638808e91524922bc397045b5553d46a6ed95e212a9d9bf009702a34d5975c0628333c7081613e234e336509da644cca5d65b21b0e3db12"' : 'data-target="#xs-components-links-module-RoomPageModule-6a775e8d0158929e9638808e91524922bc397045b5553d46a6ed95e212a9d9bf009702a34d5975c0628333c7081613e234e336509da644cca5d65b21b0e3db12"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomPageModule-6a775e8d0158929e9638808e91524922bc397045b5553d46a6ed95e212a9d9bf009702a34d5975c0628333c7081613e234e336509da644cca5d65b21b0e3db12"' :
                                            'id="xs-components-links-module-RoomPageModule-6a775e8d0158929e9638808e91524922bc397045b5553d46a6ed95e212a9d9bf009702a34d5975c0628333c7081613e234e336509da644cca5d65b21b0e3db12"' }>
                                            <li class="link">
                                                <a href="components/RoomPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomPageRoutingModule.html" data-type="entity-link" >RoomPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/InputClimate.html" data-type="entity-link" >InputClimate</a>
                            </li>
                            <li class="link">
                                <a href="classes/Inputs.html" data-type="entity-link" >Inputs</a>
                            </li>
                            <li class="link">
                                <a href="classes/Questions.html" data-type="entity-link" >Questions</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoomZone.html" data-type="entity-link" >RoomZone</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});