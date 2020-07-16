(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{436:function(t,e,l){"use strict";l.r(e);var a=l(35),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"enabling-disabling-specific-features"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#enabling-disabling-specific-features"}},[t._v("#")]),t._v(" Enabling/disabling specific features")]),t._v(" "),l("p",[t._v("You can customize the "),l("code",[t._v("site.yml")]),t._v(" deployment using variables to control what features are enabled:")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_admin_workstation")]),l("br"),l("code",[t._v(".alt_vcenter.enable")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Set to "),l("code",[t._v("true")]),t._v(" if you want to deploy your GKE Admin Workstation to a different vSphere infrastructure than that used for the admin and user clusters. Defaults to "),l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("create_admin_cluster")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("create_user_cluster")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enable_config_check")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Flag for the "),l("code",[t._v("gkectl check-config")]),t._v(" execution. It is recommended that you run these checks at least the first time. Defaults to "),l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gkectl_run_prepare")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("proxy_enabled")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Proxy configuration used for the Ansible controller, the admin workstation, and the admin and user clusters. Defaults to "),l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("private_docker_registry")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Private Docker registry for hosting GKE images. Defaults to "),l("code",[t._v("false")])])])])]),t._v(" "),l("p",[t._v("A sample deployment specification is shown below:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("cat enables.yml\n\n---\nproxy_enabled: false\nprivate_docker_registry: false\nenable_config_check: false\ngkectl_run_prepare: false\ncreate_admin_cluster: false\ncreate_user_cluster: true\n")])])]),l("h2",{attrs:{id:"command"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),l("p",[t._v("To use the deployment specification, use a command similar to the following:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("cd ~/Anthos-on-SimpliVity\n\nansible-playbook site.yml --ask-vault-pass -e “@./enables.yml”\n")])])]),l("h2",{attrs:{id:"gkectl-flags"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gkectl-flags"}},[t._v("#")]),t._v(" gkectl flags")]),t._v(" "),l("p",[t._v("A number of variables are available to help customize the various "),l("code",[t._v("gkectl")]),t._v(" commands:")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gkectl_check_flags")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Flags for the "),l("code",[t._v("gkectl check-config")]),t._v(" command"),l("br"),t._v("Defaults to "),l("code",[t._v("'--fast'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gkectl_prepare_flags")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Flags for the "),l("code",[t._v("gkectl prepare")]),t._v(" command"),l("br"),t._v("Defaults to "),l("code",[t._v("'--skip-validation-all'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gkectl_create_flags")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("inventory/group_vars/all/all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Flags for the "),l("code",[t._v("gkectl create cluster")]),t._v(" command"),l("br"),t._v("Defaults to "),l("code",[t._v("'--skip-validation-all'")])])])])]),t._v(" "),l("p",[t._v("More details on the options available for these flags are documented in the GKE on-prem reference documentation:")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://cloud.google.com/anthos/gke/docs/on-prem/reference/gkectl/check-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("gkectl check-config"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"https://cloud.google.com/anthos/gke/docs/on-prem/reference/gkectl/prepare",target:"_blank",rel:"noopener noreferrer"}},[t._v("gkectl prepare"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"https://cloud.google.com/anthos/gke/docs/on-prem/reference/gkectl/create",target:"_blank",rel:"noopener noreferrer"}},[t._v("gkectl create"),l("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);