<template>
	<Header />
	<Coins />
	<MoreAbout />
	<FairLaunch />
	<HowToBuy />
	<BuyHeinz />
	<Disclaimers />
	<Footer />
</template>

<script>
import Header from '@/components/Header';
import Coins from '@/components/Coins';
import MoreAbout from '@/components/MoreAbout';
import FairLaunch from '@/components/FairLaunch';
import HowToBuy from '@/components/HowToBuy';
import BuyHeinz from '@/components/BuyHeinz';
import Disclaimers from '@/components/Disclaimers';
import Footer from '@/components/Footer';

export default {
	components: {
		Header,
		Coins,
		MoreAbout,
		FairLaunch,
		HowToBuy,
		BuyHeinz,
		Disclaimers,
		Footer
	}
};
</script>
