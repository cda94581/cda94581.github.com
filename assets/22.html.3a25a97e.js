import{r as t,o as e,c as r,b as a,a as n,F as u,d as s,e as l}from"./app.f2ffc0da.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=n("h1",{id:"how-to-make-a-world-border-in-minecraft-bedrock-mcbe-add-on-tutorial",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-make-a-world-border-in-minecraft-bedrock-mcbe-add-on-tutorial","aria-hidden":"true"},"#"),s(" How to Make a World Border in Minecraft Bedrock | MCBE Add-on Tutorial")],-1),k=n("p",null,[s("< "),n("a",{href:"../../../videos"},'Back to "Videos, Tutorials, & Assets"')],-1),q=s("This page is a WIP. You can download the example pack "),m={href:"https://github.com/cda94581/cda94581.github.com/blob/downloads/tps/cdaTutWorldBorder%20-%20BP.mcpack?raw=true",target:"_blank",rel:"noopener noreferrer"},d=s("here"),_=s("."),h=l(`<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><p>Place this after <code>&quot;is_summonable&quot;: false</code> of the <code>player.json</code> file in the <code>entities</code> folder:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">,</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;animate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&quot;world_border&quot;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;world_border&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controller.animation.world_border&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Place this inside the <code>world_border.json</code> file in the <code>animation_controllers</code> folder:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.world_border&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;px&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.position(0) &gt; 10&quot;</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;nx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.position(0) &lt; -10&quot;</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;pz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.position(2) &gt; 10&quot;</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;nz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.position(2) &lt; -10&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;px&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token string">&quot;/tp @s 9 ~~&quot;</span><span class="token punctuation">,</span>
						<span class="token string">&quot;/tellraw @s {\\&quot;rawtext\\&quot;:[{\\&quot;text\\&quot;:\\&quot;You&#39;re out of the border!\\&quot;}]}&quot;</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;nx&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token string">&quot;/tp @s -9 ~~&quot;</span><span class="token punctuation">,</span>
						<span class="token string">&quot;/tellraw @s {\\&quot;rawtext\\&quot;:[{\\&quot;text\\&quot;:\\&quot;You&#39;re out of the border!\\&quot;}]}&quot;</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;pz&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token string">&quot;/tp @s ~~ 9&quot;</span><span class="token punctuation">,</span>
						<span class="token string">&quot;/tellraw @s {\\&quot;rawtext\\&quot;:[{\\&quot;text\\&quot;:\\&quot;You&#39;re out of the border!\\&quot;}]}&quot;</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;nz&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token string">&quot;/tp @s ~~ -9&quot;</span><span class="token punctuation">,</span>
						<span class="token string">&quot;/tellraw @s {\\&quot;rawtext\\&quot;:[{\\&quot;text\\&quot;:\\&quot;You&#39;re out of the border!\\&quot;}]}&quot;</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div>`,5);function y(g,f){const p=t("YouTubeVideo"),o=t("ExternalLinkIcon");return e(),r(u,null,[b,k,a(p,{id:"QZidj5Eqf5c"}),n("p",null,[q,n("a",m,[d,a(o)]),_]),h],64)}var v=c(i,[["render",y]]);export{v as default};
