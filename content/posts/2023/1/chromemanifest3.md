+++
title = "Manifest v3: What Does It Mean to End Users and Developers?"
date = "2023-01-01T14:17:00+08:00"
author = "Sherlock Holmes"
authorTwitter = "" #do not include @
cover = ""
tags = ["Chrome", "Manifest 3", "Google", "Tech", "Sherlock"]
keywords = ["Chrome", "Manifest 3", "Google"]
description = "It depends on which browser you are on."
showFullContent = false
readingTime = true
hideComments = false
color = "" #color from the theme settings
+++

With [Manifest v3 being forced onto browsers in 2024 along with the deprecation of Manifest 2](https://developer.chrome.com/docs/extensions/mv3/intro/), what will it actually change?  In this post, we dive into Manifest 3 and why certain browsers like Brave and Firefox made the decision to still support Manifest v2.

# What is Manifest v3?

Manifest 3 is the new specifications Google designed for extensions on Chromium.  This means that any browser using Chromium, like Edge, Chrome, Opera, Brave, etc. will be affected by this new specification.  This is designed to replace the old Manifest 2 specification, which will be deprecated in 2024.

# What changed?

There are many major changes in Manifest v3.  However, the change that will impact end users the most is the change to the [Web Request](https://developer.chrome.com/docs/extensions/reference/webRequest/) API and [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API.  In Manifest v3, that API can only be used if the extensions are force-installed using Chrome's enterprise policies.

# What will be affected?

The main catergory of extentions that will be affected are privacy and adblockers.  Previously, all ad blocking extensions utilised the Web Request API to use their [dynamic filtering rules](https://github.com/uBlockOrigin/uBlock-issues/issues/338).  With the Manifest v3 specifications,  that means the extentions now have to rely on the [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API using the primitive method of providing a list of domains to block.  There is also a limit of 30,000 URLs in the list, far less than the 300,000 rules that an adblock extension will normally use.  The same goes for privacy extentions.

# What can I do?

If you still want to be able to use adblockers efficiently, you can switch to another browser.  Brave, for example has [pledged to fork Manifest v2 and continue to support it](https://github.com/brave/brave-browser/issues/20059).  Firefox is also keeping Manifest v2.