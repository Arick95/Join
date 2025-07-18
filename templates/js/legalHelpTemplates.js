


/**
 * generate html code for help screen
 * 
 * @returns html code
 */
function generateHelpScreenHTML() {
    return /*html*/ `
    <div class="helpScreenSection">
        <div class="helpScreenSectionHeadline">
            <h1>Help</h1>
            <img onclick="returnToLastActivePage()" class="contactsDetailHeadPic2" src="./img/returnArrowDark.svg" alt="returnToListBtn">
        </div>
        <h2>What is Join?</h2>
        <span>This tool is a versatile solution that incorporates a Kanban board.
            It enables you to efficiently organize and track your tasks within projects or business processes, 
            making it an ideal choice for seamless collaboration with your team. 
            By utilizing this tool, you can enhance productivity, ensuring that all tasks are well-managed and deadlines are never missed.
            Its intuitive user interface further simplifies task management, catering to both individual users and teams striving for effective and efficient task organization.</span>
        <h2>To maximize the benefits of the task management tool, follow these simple steps:</h2>
        <ol>
            <li><b>Create and manage tasks effortlessly:</b> Provide a title, description, and category to specify the task details.
                Assign tasks to team members from your existing contact list or invite new contacts to collaborate on the task.</li>
                <br>
            <li><b>Track task progress on the Kanban board:</b> Monitor the current status of your tasks on the Kanban board.
                Easily modify the task status by utilizing the drag-and-drop feature. Additionally, you can edit task details as needed.</li>
                <br>
            <li><b>Build a contact list for seamless communication:</b> Add team members to your contact list for quick and easy communication.
                Assign tasks directly to your contacts, streamlining task allocation and collaboration.
                Having your team members in the contact list also facilitates organized project management by consolidating relevant contact information in one centralized location.</li>
        </ol>
        <h3>By following these guidelines, you can leverage the task management tool to streamline your workflow,
            improve collaboration, and effectively manage your tasks and projects.</h3>
    </div>`;

}

/**
 * generate html code for legal notice screen
 * 
 * @returns html code
 */
function generateLegalNoticeScreenHTML() {
    return /*html*/ `
    <div class="helpScreenSection">
    <div class="helpScreenSectionHeadline">
    <h1 class="legalHeadline">Impressum</h1>
    <img onclick="returnToLastActivePage()" class="contactsDetailHeadPic2" src="./img/returnArrowDark.svg" alt="returnToListBtn">
    </div>
    <h3>Angaben gemäß § 5 TMG</h3>
    <p>Enrico Landriscina<br>
        Mozartstraße 13<br>
        76744 Wörth am Rhein<br>
    </p>
    <h2>Kontakt</h2>
    Enrico Landriscina<br>
    Mozartstraße 13<br>
    76744 Wörth am Rhein<br>
    <p>Telefon: 0178 6251244<br />
        E-Mail: info@enrico-von-landriscina.de</h3>
    <h2>Quellen</h2>
    <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></h3>
    <br>
    <br>
    <br>
    <h2>Datenschutzerklärung</h2>
<h3>Allgemeine Hinweise</h3> 
<p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
<h3>Datenerfassung auf dieser Website</h3> 
<h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4> 
<p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p> 
<h4>Wie erfassen wir Ihre Daten?</h4> 
<p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p> 
<p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p> 
<h4>Wofür nutzen wir Ihre Daten?</h4> 
<p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> 
<h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4> 
<p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p> 
<p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
<h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
<h3>Datenschutz</h3> 
<p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p> 
<p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p> 
<p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
<h3>Hinweis zur verantwortlichen Stelle</h3> 
<p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p> 
<p>Enrico Landriscina<br />
Mozartstraße 13<br>
76744 Wörth am Rhein
</p>

<p>Telefon: 0178 6251244<br />
E-Mail:  info@enrico-von-landriscina.de</p>
<h3>Verantwortliche Stelle</h3>
<p>Verantwortliche Stelle im Sinne der Datenschutzgesetze ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen usw.) entscheidet.</p>
<h3>Speicherdauer</h3>
<p>Sofern in dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wird, bleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie eine berechtigte Löschung anfordern oder Ihre Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuerliche oder handelsrechtliche Aufbewahrungspflichten). In diesem Fall erfolgt die Löschung nach Wegfall dieser Gründe.</p>
<h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
<p>Sofern Sie Ihre Einwilligung zur Datenverarbeitung erteilt haben, verarbeiten wir Ihre personenbezogenen Daten auf der Grundlage von Artikel 6 Absatz 1 lit. a der Datenschutz-Grundverordnung (DSGVO) bzw. Artikel 9 Absatz 2 lit. a DSGVO, sofern es sich um besondere Kategorien von personenbezogenen Daten gemäß Artikel 9 Absatz 1 DSGVO handelt. Wenn Sie ausdrücklich in die Übermittlung personenbezogener Daten in Drittländer eingewilligt haben, erfolgt die Verarbeitung auch auf der Grundlage von Artikel 49 Absatz 1 lit. a DSGVO. Wenn Sie in die Speicherung von Cookies oder den Zugriff auf Informationen auf Ihrem Endgerät (z. B. mittels Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf der Grundlage von § 25 Absatz 1 des Telemediengesetzes (TMG). Ihre Einwilligung ist jederzeit widerrufbar. Sofern Ihre Daten für die Erfüllung eines Vertrages oder zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, verarbeiten wir Ihre Daten auf der Grundlage von Artikel 6 Absatz 1 lit. b DSGVO. Darüber hinaus verarbeiten wir Ihre Daten, sofern dies zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, auf der Grundlage von Artikel 6 Absatz 1 lit. c DSGVO. Die Datenverarbeitung kann auch auf der Grundlage unseres berechtigten Interesses gemäß Artikel 6 Absatz 1 lit. f DSGVO erfolgen. In den folgenden Abschnitten dieser Datenschutzerklärung informieren wir Sie über die jeweiligen Rechtsgrundlagen, die in den konkreten Einzelfällen relevant sind.</p>
<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
<p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt davon unberührt.</p>
<h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Artikel 21 DSGVO)</h3>
<p>Wenn die Datenverarbeitung auf der Grundlage von Artikel 6 Absatz 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, einschließlich eines auf diese Bestimmungen gestützten Profilings. Die jeweilige Rechtsgrundlage für die Verarbeitung entnehmen Sie bitte dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Artikel 21 Absatz 1 DSGVO).</p>
<p>Wenn Ihre personenbezogenen Daten verarbeitet werden, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten zum Zwecke solcher Werbung einzulegen, einschließlich eines auf das Profiling bezogenen Widerspruchs, soweit er mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr für Zwecke der Direktwerbung verwendet (Widerspruch nach Artikel 21 Absatz 2 DSGVO).</p>
<h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
<p>Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
<h3>Recht auf Datenübertragbarkeit</h3>
<p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich selbst oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch möglich ist.</p>
<h3>Auskunft, Berichtigung und Löschung</h3>
<p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>

<h3>Recht auf Einschränkung der Verarbeitung</h3>
<p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
<ul>
  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
</ul>
<p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>

<h3>SSL- bzw. TLS-Verschlüsselung</h3>
<p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

<h3>Widerspruch gegen Werbe-E-Mails</h3>
<p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>

<h3>Cookies</h3>
<p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
<p>Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
<p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>

<h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
<p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
<p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
    </div>
    `;
}