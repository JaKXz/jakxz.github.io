import{a,t}from"./disclose-version.B0yNOEMG.js";import{n as i}from"./runtime.BDSRHlc4.js";const l={title:"Pairing",date:"2023-08-22",updated:"2024-08-07",categories:["dev","pairing","coaching"],coverWidth:16,coverHeight:9,excerpt:"A co-written essay on my approach to pairing"};var r=t(`<h2 id="why"><a aria-hidden="true" tabindex="-1" href="#why"><span class="icon icon-link"></span></a>Why</h2> <p>The purpose of pairing, ultimately, is to go farther, faster, together.
There are some secondary reasons though:</p> <ol><li><strong>Context sharing / anti-siloing</strong>. By working through a problem together we can guarantee that two people understand it versus just one.</li> <li><strong>Distraction reduction</strong>. Pairing forces your attention to be immediately accountable to another person. Checking your phone? Bad form.</li> <li><strong>Team building / skill development.</strong> Pairing promotes the exchange of ideas and skills. One developer may be more experienced or have a different area of expertise than the other, and pairing allows for continuous, hands-on learning.</li></ol> <h2 id="what"><a aria-hidden="true" tabindex="-1" href="#what"><span class="icon icon-link"></span></a>What</h2> <p>If pairing means working together, what does the work look like?</p> <p>There are three axes helpful in answering this question:</p> <ul><li>Driver vs. Navigator</li> <li>Scheduled vs. ad hoc</li> <li>Unblocking a problem vs. exploring a problem space</li></ul> <p>It is typical of pair programming to have two roles: a <strong>driver</strong> (the person with control of the editor) and a <strong>navigator</strong> (the person keeping track of where we are, giving immediate feedback and information to the driver).</p> <p>It is good practice to be explicit about declaring which role each person is taking at the start of a pair.
It is similarly good practice to switch roles during the pair.</p> <p>Conversely, it is extremely poor practice to be disengaged during a pair regardless of role.
This is a trap that is easy to fall into as a navigator and must be consciously avoided.</p> <p><strong>Scheduled</strong> pairs are straightforward: you agree to a time in advance. <strong>Ad hoc</strong> pairs happen immediately.
You must actively communicate personal preferences and performance factors when being asked to pair.
Do not accept invites or requests to pair if you <em>know</em> you are not going to be an active, great communicator.
Consider asking participants “is now still a good time to pair?” when you begin.</p> <p>Finally, deciding whether you are <strong>unblocking a problem</strong> vs. <strong>exploring a problem space</strong> can have big impact on the work of a pair.
Unblocking requires extreme clarity about what exactly the problem is.
If you bring a problem to your pair you should be providing details in advance or setting the stage at the beginning of the pair.
Lack of preparation signals disengagement from the very start.
If you post about being blocked by a problem in your standup, consider asking for a pair.</p> <p>Exploring a problem space, to the contrary, sometimes means learning what exactly the problem is during the pair.
This type of pairing can be especially useful during the earliest phases of feature development.</p> <p>Along all three axes, personal preferences and performance factors should be communicated.
If you prefer unblocking problems as a navigator in ad hoc pairs, you should make sure to say it.</p> <h2 id="how"><a aria-hidden="true" tabindex="-1" href="#how"><span class="icon icon-link"></span></a>How</h2> <p>Pairing requires active engagement by both people.
Passive mode must be avoided at all costs; it would be better to reschedule or cancel a pair than to be passive.</p> <p>Traditionally & when in person, pairing means sharing one computer to do the work together.
If you find yourselves on separate computers, you must do extra lifting to communicate your focus in your roles.
For example, the driver can continue on a feature while the navigator pulls up the relevant API documentation and is actively engaged.
If you’re tempted to be passive, stick to one computer.</p> <p>For remote, obviously two computers are necessary.
There is a strong temptation to default to sharing your screen because this action has become ubiquitous in remote work.
However, the screen sharing built into popular meeting tools like Zoom encourages passive engagement and easily turns a driver / navigator pair into a driver / passenger.</p> <p>You should strongly prefer tools that enable <strong>multiplayer mode</strong>; tools that allow multiple developers to share and work on the same codebase in real-time.
Screen sharing can work well with <em>good</em> meeting tools (e.g. <a href="https://tuple.app" rel="nofollow">Tuple</a>, <a href="https://multi.app/" rel="nofollow">Multi</a>, and <a href="https://www.coscreen.co/" rel="nofollow">CoScreen</a>) that enable multi-cursor control, easy screen drawing, and sharing individual windows.
VSCode and JetBrains IDEs also have multiplayer features built in (but are atm limited to the codebase).</p> <p>Tooling alone cannot overcome the problem of passive participation, but good defaults nudge us in the right direction.</p> <h3 id="etiquette"><a aria-hidden="true" tabindex="-1" href="#etiquette"><span class="icon icon-link"></span></a>Etiquette</h3> <ul><li><strong>Be clear and communicate your preferences for pairing.</strong> Use the 3 axes as a communication tool.</li> <li><strong>Start the session by writing down a clear goal.</strong> This is especially important when a pair is working on a problem where only one party has knowledge of the problem at the start.</li> <li><strong>Use a multiplayer setup and avoid problematic screen sharing.</strong> Screen sharing in popular meeting tools, especially in low resolution like Zoom, encourages passive mode.</li> <li><strong>If you need to shift your focus from the pair, announce it explicitly</strong>. Obviously, there are times when a pair will need to temporarily pause or one person will need to take care of some urgent matter. That’s okay, but you should always announce that your attention has shifted. Be explicit.</li> <li><strong>Turn on focus mode in macOS to prevent notifications.</strong> You can allow priority notifications from applications like Slack, but you should disable everything that isn’t urgent.</li> <li><strong>Put your pair in a calendar invite (even if it’s ad hoc) and update your Slack status</strong>. If you use the Google Calendar extension, you can configure it to automatically update your status based on meeting presence. This helps to announce to other people that you won’t see their notifications immediately.</li> <li><strong>Assume that people currently pairing have 100% of their attention dedicated to the pair.</strong> If you notice a Slack status or a calendar event for pairing, assume that you will not receive a reply until the pair is finished.</li> <li><strong>Don’t pair for more than 90 minutes continuously.</strong> Pairing is a cognitively expensive process. Doing it well requires concentration and attention that many people may not have. Take breaks frequently, and be comfortable going on and off camera and mute to excuse yourself as you would normally. <em>Breaks for a short stretch or walk will make you more effective. Pairing is <strong>not</strong> just a long meeting but a continuous flow.</em></li></ul> <h2 id="see-also"><a aria-hidden="true" tabindex="-1" href="#see-also"><span class="icon icon-link"></span></a>See also</h2> <ul><li><a href="https://martinfowler.com/articles/on-pair-programming.html" rel="nofollow">Martin Fowler: On Pair Programming</a></li> <li><a href="https://tuple.app/pair-programming-guide/" rel="nofollow">Tuple’s Pair Programming Guide</a></li> <li><a href="https://martinfowler.com/articles/bottlenecks-of-scaleups/06-onboarding.html#PairProgrammingAsACriticalOnboardingTechnique" rel="nofollow">Removing bottlenecks in onboarding with pairing</a></li></ul>`,1);function p(e){var o=r();i(46),a(e,o)}export{p as default,l as metadata};
