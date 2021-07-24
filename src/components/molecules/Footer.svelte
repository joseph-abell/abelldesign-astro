<script>
	import SocialMediaItem from './SocialMediaItem.svelte';
	import FooterLogoContainer from '../atoms/FooterLogoContainer.svelte';
	import FooterImage from '../atoms/FooterImage.svelte';

	export let footer;
</script>

<footer class="footer-molecule">
	<div class="footer-container">
		<ul>
			<SocialMediaItem
				text={footer.emailText}
				link={footer.emailLink}
				image={footer.emailImage.url}
			/>
			<SocialMediaItem text={footer.phoneText} link={null} image={footer.phoneImage.url} />
		</ul>
		<ul>
			<SocialMediaItem
				text={footer.linkedInText}
				link={footer.linkedInLink}
				image={footer.linkedInImage.url}
			/>
			<SocialMediaItem
				text={footer.instagramText}
				link={footer.instagramLink}
				image={footer.instagramImage.url}
			/>
		</ul>
		<div>
			<FooterLogoContainer>
				<div style="display: flex; align-items: center; justify-content: center;">
					<FooterImage src={footer.footerLogoImage.url} alt="" />
				</div>
			</FooterLogoContainer>
		</div>
	</div>
</footer>
