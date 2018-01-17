jQuery.sap.declare("ui.s2p.mm.purchorder.approve.MM_PO_APV24.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "ui.s2p.mm.purchorder.approve",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/MM_PO_APV" // we use a URL relative to our own component
		// extension application is deployed with customer namespace
});
this.ui.s2p.mm.purchorder.approve.Component.extend("ui.s2p.mm.purchorder.approve.MM_PO_APV24.Component", {
	metadata: {
		version: "1.0",
		config: {},
		customizing: {
			"sap.ui.viewExtensions": {
				"ui.s2p.mm.purchorder.approve.view.S3": {
					"extHeaderInfo": {
						"className": "sap.ui.core.Fragment",
						"fragmentName": "ui.s2p.mm.purchorder.approve.MM_PO_APV24.view.S3_extHeaderInfoCustom",
						"type": "XML"
					}
				},
				"ui.s2p.mm.purchorder.approve.view.S2": {
					"extListItemInfo": {
						"className": "sap.ui.core.Fragment",
						"fragmentName": "ui.s2p.mm.purchorder.approve.MM_PO_APV24.view.S2_extListItemInfoCustom",
						"type": "XML"
					}
				}
			},
			"sap.ui.viewModifications": {
				"ui.s2p.mm.purchorder.approve.view.S3": {
					"POInformationAccountAssignment": {
						"visible": false
					}
				}
			},
			"sap.ui.viewReplacements": {
				"ui.s2p.mm.purchorder.approve.view.S3": {
					"viewName": "ui.s2p.mm.purchorder.approve.MM_PO_APV24.view.S3Custom",
					"type": "XML"
				}
			}
		}
	}
});