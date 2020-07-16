(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{415:function(e,o,t){e.exports=t.p+"assets/img/anthos-components.b3a802d2.png"},416:function(e,o,t){e.exports=t.p+"assets/img/gke-admin-user-clusters.fa09e2cf.png"},446:function(e,o,t){"use strict";t.r(o);var n=t(45),s=Object(n.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"google-cloud-s-anthos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-s-anthos"}},[e._v("#")]),e._v(" Google Cloud’s Anthos")]),e._v(" "),n("p",[e._v("Anthos is an open, hybrid and multi-cloud application platform that enables you to modernize your\nexisting applications, build new ones, and run them anywhere in a secure manner. Built on open source\ntechnologies pioneered by Google (including Kubernetes, Istio, and Knative), Anthos enables consistency\nbetween on-premise and cloud environments and helps accelerate application development.")]),e._v(" "),n("p",[e._v("The main Anthos components are shown in Figure 1. Components running in the public cloud are shown on the left-hand side of the figure, while on-premise components are on the right.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(415),alt:'"Anthos components"'}})]),e._v(" "),n("p",[n("strong",[e._v("Figure 1.")]),e._v(" Anthos components")]),e._v(" "),n("p",[e._v("Anthos consists of a number of components including:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Anthos GKE on-prem:")]),e._v(" You can run your Kubernetes clusters reliably and efficiently on-premise using Anthos GKE on-prem. It makes container management easy, with quick, managed, and simple installs as well as upgrades validated by Google. GKE Connect runs on top of your fundamental connection (formed with Cloud Interconnect or Cloud VPN) and enables you to register your GKE on-prem clusters securely with Google Cloud. This allows access to your cluster and to workload management features that interact with your cluster. When you register a user cluster with Google Cloud Console, a Kubernetes Deployment called the Connect Agent is created in the cluster. The Connect Agent establishes a long-lived, encrypted connection between the cluster and Cloud Console. The Google Cloud Console gives you a single-pane-of-glass view for managing your clusters across on-premise and cloud environments. All of your resources are shown in a single dashboard, and it is easy to get visibility into your workloads across multiple Kubernetes clusters. More information on Anthos GKE is available at "),n("a",{attrs:{href:"https://cloud.google.com/anthos/gke",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/anthos/gke"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Anthos Config Management:")]),e._v(" You can automate policy and security at scale for your Kubernetes deployments with Anthos Config Management. It powers rapid and secure application development, enabling you to create a common configuration for administrative policies that apply to your Kubernetes clusters both on-premise and in the cloud. You can evaluate changes and roll them out to all Kubernetes clusters so that your desired state is always reflected. Further information on Anthos Config Management is available at "),n("a",{attrs:{href:"https://cloud.google.com/anthos/config-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/anthos/config-management"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Anthos Service Mesh:")]),e._v(" Google Cloud’s fully managed service mesh lets you manage complex microservices architectures so that you can get all the benefits of microservices without the overheads. It allows you to configure, control, secure and monitor your services in one place, taking a significant burden off your operations and development teams. More information on Anthos Service Mesh is available at "),n("a",{attrs:{href:"https://cloud.google.com/anthos/service-mesh",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/anthos/service-mesh"),n("OutboundLink")],1),e._v(".")])])]),e._v(" "),n("h2",{attrs:{id:"additional-anthos-functionality"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-anthos-functionality"}},[e._v("#")]),e._v(" Additional Anthos functionality")]),e._v(" "),n("p",[e._v("Anthos provides additional functionality in a number of areas to help you deploy and manage your Kubernetes clusters.")]),e._v(" "),n("h3",{attrs:{id:"monitoring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[e._v("#")]),e._v(" Monitoring")]),e._v(" "),n("p",[e._v("Built-in observability for Google Cloud is provided through Stackdriver. It offers a fully managed logging solution, metrics collection, monitoring, dashboarding, and alerting. Stackdriver monitors GKE on-prem clusters in a similar way to cloud-based GKE clusters.")]),e._v(" "),n("p",[e._v("Prometheus and Grafana can be enabled on each admin cluster and user cluster, if you prefer using these technologies. Running this open-source monitoring stack locally facilitates the retention of application metrics within the cluster and also enables the troubleshooting of issues if network connectivity to Google Cloud is lost.")]),e._v(" "),n("p",[e._v("Commercial third-party monitoring and logging solutions are also supported including products from Datadog, Elastic and Splunk.")]),e._v(" "),n("h3",{attrs:{id:"rapid-application-deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rapid-application-deployment"}},[e._v("#")]),e._v(" Rapid application deployment")]),e._v(" "),n("p",[e._v("You can quickly deploy functional software packages that run on Google Cloud Platform using GCP Marketplace. The Marketplace enables you to deploy applications such as Cassandra or Jenkins with a one-click installer.")]),e._v(" "),n("h3",{attrs:{id:"serverless"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#serverless"}},[e._v("#")]),e._v(" Serverless")]),e._v(" "),n("p",[e._v("You can run stateless containers in a fully managed, auto-scaling compute platform using Cloud Run for Anthos, which is based on the open-source Knative project.")]),e._v(" "),n("h2",{attrs:{id:"anthos-gke-on-prem-architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anthos-gke-on-prem-architecture"}},[e._v("#")]),e._v(" Anthos GKE on-prem architecture")]),e._v(" "),n("p",[e._v("Figure 2 is an architecture diagram for Anthos GKE on-prem, deployed with a single user cluster:")]),e._v(" "),n("p",[n("img",{attrs:{src:t(416),alt:'"GKE admin cluster with single user cluster"'}})]),e._v(" "),n("p",[n("strong",[e._v("Figure 2.")]),e._v(" GKE admin cluster with single user cluster")]),e._v(" "),n("p",[e._v("The primary components in a GKE on-prem deployment include:")]),e._v(" "),n("ul",[n("li",[e._v("Admin workstation")]),e._v(" "),n("li",[e._v("Admin cluster")]),e._v(" "),n("li",[e._v("One or more user clusters")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" The control plane master nodes for the user clusters live inside the admin cluster, rather than\nin the user clusters themselves.")])])}),[],!1,null,null,null);o.default=s.exports}}]);