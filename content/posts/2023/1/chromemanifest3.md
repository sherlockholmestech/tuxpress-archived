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

# Why Manifest v3?

To quote Google:

> Manifest V3 is part of a shift in the philosophy behind user security and privacy.

Here are [some of their other claims](https://developer.chrome.com/docs/extensions/mv3/intro/platform-vision/):

> Privacy — Provide ways for extensions to work well without the need to persistently access user data. Improve user control of permissions by informing users what extensions are doing, letting them grant permissions at runtime and in context.
>
> Security — Move toward stricter protocols and requirements for extensions to access resources outside the extension context
>
> Performance — Ensure that extensions work well on all devices: performance issues don't detract from the browser experience, and Chrome runs smoothly even when many extensions are installed.

However, their claims are invalid.  If you take a look at the changes made to Manifest v3, it looks like they are sabotaging the privacy of the users instead of improving them (covered in [What will be affected?](#what-will-be-affected)).  Or in the words of the EFF:

>When a malicious extension sneaks through the security review process, it is usually interested in simply observing the conversation between your browser and whatever websites you visit. The malicious activity happens elsewhere, after the data has already been read. A more thorough review process could improve security, but Chrome hasn’t said they’ll do that. Instead, their solution is to restrict capabilities for all extensions.

Testing has also shown that [performance of the browsers **increased** when adblockers were enabled](ttps://kevin.borgolte.me/files/pdf/www2020-privacy-extensions.pdf ), making the 3rd point invalid.

# What can I do?

If you still want to be able to use adblockers efficiently, you can switch to another browser.  Brave, for example has [pledged to fork Manifest v2 and continue to support it](https://github.com/brave/brave-browser/issues/20059).  Firefox is also keeping Manifest v2.  I wholeheartedly recommend switching to those browsers.

# Conclusion

Finishing off with a quote from Giorgio Maone, author of [NoScript](https://noscript.net/):

> Of all the browser extension API revolutions I've seen in 16 years of NoScript development, Manifest V3 is the worst offender by a long shot: a huge step backwards, and a poorly justified one. Manifest V3 shrinks extension capabilities and Web users' freedom to customize their browsing experience.
> 
> While there are many reasons to doubt the claimed privacy improvements and the theoretical performance gains, the disruption for existing extensions is painfully real: non-trivial extensions will need to be rewritten, in cases forced to abandon fundamental features.
> 
> But even worse is the severe crunch on browser extensions developers' ability to innovate, and, in the case of privacy and security extensions, to respond to emerging threats promptly and creatively. The net loss is huge, for developers but most importantly for web users' online safety and freedom of choice.


*DISCLAIMER: The opinions expressed in this article are solely that of the author’s, and do not represent the opinions of any organisation, affiliated or otherwise. While care has been taken to ensure factual accuracy, statements being fully accurate and impartial is not guaranteed.*