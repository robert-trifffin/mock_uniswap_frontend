const exchange_proxy = ('0x190480908c11Efca37EDEA4405f4cE1703b68b23')
const exchange = ('0xc58eF32b48F8242D0fe9506BD7249c2e19B4A108')
const cusd = ('0x62492A644A588FD904270BeD06ad52B9abfEA1aE')
const cgld = ('0xdDc9bE57f553fe75752D61606B94CBD7e0264eF8')

const account_proxy = ('0x64FF4e6F7e08119d877Fd2E26F4C20B537819080')
const account = ('0x5220d91403aa39d25De79699dCa75Ee722E68102')

const lockedgold_proxy = ('0xF07406D8040fBD831e9983CA9cC278fBfFeB56bF')
const lockedgold = ('0x9a228BCEC0F31c21023f4b761a98072b9fc8bc7A')
const election_proxy = ('0x7eb2b2f696C60A48Afd7632f280c7De91c8E5aa5')
const election = ('0x8eefD592C32f8012A0C69093e86Aae5e05ea78f8')

const dsrv_group = ('0xac4534611d26d6575b3e13ea04c253e82f5aac2f')
const dsrv_lesser = ('0x063d56b04de028ca34678d904887417fdc0dc606')
const dsrv_greater = ('0xc50511e813e9b0840b6cfbe9ca702e7383f13a00')


let electionABI =
[
{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"validatorSignerAddressFromCurrentSet","inputs":[{"type":"uint256","name":"index"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"distributeEpochRewards","inputs":[{"type":"address","name":"group"},{"type":"uint256","name":"value"},{"type":"address","name":"lesser"},{"type":"address","name":"greater"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"initialized","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"activate","inputs":[{"type":"address","name":"group"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getActiveVotes","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"checkProofOfPossession","inputs":[{"type":"address","name":"sender"},{"type":"bytes","name":"blsKey"},{"type":"bytes","name":"blsPop"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"hasActivatablePendingVotes","inputs":[{"type":"address","name":"account"},{"type":"address","name":"group"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":""}],"name":"electValidatorSigners","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getNumVotesReceivable","inputs":[{"type":"address","name":"group"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getTotalVotesForGroupByAccount","inputs":[{"type":"address","name":"group"},{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getEpochNumberOfBlock","inputs":[{"type":"uint256","name":"blockNumber"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"setMaxNumGroupsVotedFor","inputs":[{"type":"uint256","name":"_maxNumGroupsVotedFor"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":""}],"name":"getCurrentValidatorSigners","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":""}],"name":"getGroupsVotedForByAccount","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":""}],"name":"getVerifiedSealBitmapFromHeader","inputs":[{"type":"bytes","name":"header"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"value"}],"name":"electabilityThreshold","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"vote","inputs":[{"type":"address","name":"group"},{"type":"uint256","name":"value"},{"type":"address","name":"lesser"},{"type":"address","name":"greater"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getActiveVoteUnitsForGroup","inputs":[{"type":"address","name":"group"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"validatorSignerAddressFromSet","inputs":[{"type":"uint256","name":"index"},{"type":"uint256","name":"blockNumber"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"setElectabilityThreshold","inputs":[{"type":"uint256","name":"threshold"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":""}],"name":"hashHeader","inputs":[{"type":"bytes","name":"header"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getTotalVotesByAccount","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"revokeActive","inputs":[{"type":"address","name":"group"},{"type":"uint256","name":"value"},{"type":"address","name":"lesser"},{"type":"address","name":"greater"},{"type":"uint256","name":"index"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":"groups"},{"type":"uint256[]","name":"values"}],"name":"getTotalVotesForEligibleValidatorGroups","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"minQuorumSizeInCurrentSet","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"registry","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"numberValidatorsInCurrentSet","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getBlockNumberFromHeader","inputs":[{"type":"bytes","name":"header"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"getGroupEligibility","inputs":[{"type":"address","name":"group"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"forceDecrementVotes","inputs":[{"type":"address","name":"account"},{"type":"uint256","name":"value"},{"type":"address[]","name":"lessers"},{"type":"address[]","name":"greaters"},{"type":"uint256[]","name":"indices"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isOwner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":""}],"name":"electNValidatorSigners","inputs":[{"type":"uint256","name":"minElectableValidators"},{"type":"uint256","name":"maxElectableValidators"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getActiveVotesForGroup","inputs":[{"type":"address","name":"group"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getPendingVotesForGroup","inputs":[{"type":"address","name":"group"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getTotalVotes","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getEpochNumber","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"numberValidatorsInSet","inputs":[{"type":"uint256","name":"blockNumber"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getPendingVotesForGroupByAccount","inputs":[{"type":"address","name":"group"},{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"revokePending","inputs":[{"type":"address","name":"group"},{"type":"uint256","name":"value"},{"type":"address","name":"lesser"},{"type":"address","name":"greater"},{"type":"uint256","name":"index"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"markGroupEligible","inputs":[{"type":"address","name":"group"},{"type":"address","name":"lesser"},{"type":"address","name":"greater"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getActiveVoteUnitsForGroupByAccount","inputs":[{"type":"address","name":"group"},{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address[]","name":""}],"name":"getEligibleValidatorGroups","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"markGroupIneligible","inputs":[{"type":"address","name":"group"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setRegistry","inputs":[{"type":"address","name":"registryAddress"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"maxNumGroupsVotedFor","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getElectabilityThreshold","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getActiveVotesForGroupByAccount","inputs":[{"type":"address","name":"group"},{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getTotalVotesForGroup","inputs":[{"type":"address","name":"group"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getEpochSize","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"revokeAllActive","inputs":[{"type":"address","name":"group"},{"type":"address","name":"lesser"},{"type":"address","name":"greater"},{"type":"uint256","name":"index"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"minQuorumSize","inputs":[{"type":"uint256","name":"blockNumber"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"canReceiveVotes","inputs":[{"type":"address","name":"group"},{"type":"uint256","name":"value"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""},{"type":"uint256","name":""}],"name":"fractionMulExp","inputs":[{"type":"uint256","name":"aNumerator"},{"type":"uint256","name":"aDenominator"},{"type":"uint256","name":"bNumerator"},{"type":"uint256","name":"bDenominator"},{"type":"uint256","name":"exponent"},{"type":"uint256","name":"_decimals"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getGroupEpochRewards","inputs":[{"type":"address","name":"group"},{"type":"uint256","name":"totalEpochRewards"},{"type":"uint256[]","name":"uptimes"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"setElectableValidators","inputs":[{"type":"uint256","name":"min"},{"type":"uint256","name":"max"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"initialize","inputs":[{"type":"address","name":"registryAddress"},{"type":"uint256","name":"minElectableValidators"},{"type":"uint256","name":"maxElectableValidators"},{"type":"uint256","name":"_maxNumGroupsVotedFor"},{"type":"uint256","name":"_electabilityThreshold"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"min"},{"type":"uint256","name":"max"}],"name":"electableValidators","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""},{"type":"uint256","name":""}],"name":"getElectableValidators","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":""}],"name":"getParentSealBitmap","inputs":[{"type":"uint256","name":"blockNumber"}],"constant":true},{"type":"event","name":"ElectableValidatorsSet","inputs":[{"type":"uint256","name":"min","indexed":false},{"type":"uint256","name":"max","indexed":false}],"anonymous":false},{"type":"event","name":"MaxNumGroupsVotedForSet","inputs":[{"type":"uint256","name":"maxNumGroupsVotedFor","indexed":false}],"anonymous":false},{"type":"event","name":"ElectabilityThresholdSet","inputs":[{"type":"uint256","name":"electabilityThreshold","indexed":false}],"anonymous":false},{"type":"event","name":"ValidatorGroupMarkedEligible","inputs":[{"type":"address","name":"group","indexed":true}],"anonymous":false},{"type":"event","name":"ValidatorGroupMarkedIneligible","inputs":[{"type":"address","name":"group","indexed":true}],"anonymous":false},{"type":"event","name":"ValidatorGroupVoteCast","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"group","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"ValidatorGroupVoteActivated","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"group","indexed":true},{"type":"uint256","name":"value","indexed":false},{"type":"uint256","name":"units","indexed":false}],"anonymous":false},{"type":"event","name":"ValidatorGroupPendingVoteRevoked","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"group","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"ValidatorGroupActiveVoteRevoked","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"group","indexed":true},{"type":"uint256","name":"value","indexed":false},{"type":"uint256","name":"units","indexed":false}],"anonymous":false},{"type":"event","name":"EpochRewardsDistributedToVoters","inputs":[{"type":"address","name":"group","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"RegistrySet","inputs":[{"type":"address","name":"registryAddress","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false}];

let lockedgoldABI = 
[
{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32[]","name":""}],"name":"getSlashingWhitelist","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"initialized","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"decrementNonvotingAccountBalance","inputs":[{"type":"address","name":"account"},{"type":"uint256","name":"value"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"removeSlasher","inputs":[{"type":"string","name":"slasherIdentifier"},{"type":"uint256","name":"index"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"unlockingPeriod","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"index"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getTotalLockedGold","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getAccountTotalLockedGold","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"slash","inputs":[{"type":"address","name":"account"},{"type":"uint256","name":"penalty"},{"type":"address","name":"reporter"},{"type":"uint256","name":"reward"},{"type":"address[]","name":"lessers"},{"type":"address[]","name":"greaters"},{"type":"uint256[]","name":"indices"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getAccountNonvotingLockedGold","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isSlasher","inputs":[{"type":"address","name":"slasher"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"unlock","inputs":[{"type":"uint256","name":"value"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"addSlasher","inputs":[{"type":"string","name":"slasherIdentifier"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setUnlockingPeriod","inputs":[{"type":"uint256","name":"value"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes32","name":""}],"name":"slashingWhitelist","inputs":[{"type":"uint256","name":""}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"incrementNonvotingAccountBalance","inputs":[{"type":"address","name":"account"},{"type":"uint256","name":"value"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"registry","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getNonvotingLockedGold","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isOwner","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setRegistry","inputs":[{"type":"address","name":"registryAddress"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"relock","inputs":[{"type":"uint256","name":"index"},{"type":"uint256","name":"value"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getTotalPendingWithdrawals","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"totalNonvoting","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"initialize","inputs":[{"type":"address","name":"registryAddress"},{"type":"uint256","name":"_unlockingPeriod"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256[]","name":""},{"type":"uint256[]","name":""}],"name":"getPendingWithdrawals","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"payable","payable":true,"outputs":[],"name":"lock","inputs":[],"constant":false},{"type":"event","name":"UnlockingPeriodSet","inputs":[{"type":"uint256","name":"period","indexed":false}],"anonymous":false},{"type":"event","name":"GoldLocked","inputs":[{"type":"address","name":"account","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"GoldUnlocked","inputs":[{"type":"address","name":"account","indexed":true},{"type":"uint256","name":"value","indexed":false},{"type":"uint256","name":"available","indexed":false}],"anonymous":false},{"type":"event","name":"GoldRelocked","inputs":[{"type":"address","name":"account","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"GoldWithdrawn","inputs":[{"type":"address","name":"account","indexed":true},{"type":"uint256","name":"value","indexed":false}],"anonymous":false},{"type":"event","name":"SlasherWhitelistAdded","inputs":[{"type":"string","name":"slasherIdentifier","indexed":true}],"anonymous":false},{"type":"event","name":"SlasherWhitelistRemoved","inputs":[{"type":"string","name":"slasherIdentifier","indexed":true}],"anonymous":false},{"type":"event","name":"AccountSlashed","inputs":[{"type":"address","name":"slashed","indexed":true},{"type":"uint256","name":"penalty","indexed":false},{"type":"address","name":"reporter","indexed":true},{"type":"uint256","name":"reward","indexed":false}],"anonymous":false},{"type":"event","name":"RegistrySet","inputs":[{"type":"address","name":"registryAddress","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false}];


let accountABI = 
[
{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"hasAuthorizedValidatorSigner","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"authorizeValidatorSignerWithPublicKey","inputs":[{"type":"address","name":"signer"},{"type":"uint8","name":"v"},{"type":"bytes32","name":"r"},{"type":"bytes32","name":"s"},{"type":"bytes","name":"ecdsaPublicKey"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setAccountDataEncryptionKey","inputs":[{"type":"bytes","name":"dataEncryptionKey"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"removeVoteSigner","inputs":[],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"authorizeValidatorSignerWithKeys","inputs":[{"type":"address","name":"signer"},{"type":"uint8","name":"v"},{"type":"bytes32","name":"r"},{"type":"bytes32","name":"s"},{"type":"bytes","name":"ecdsaPublicKey"},{"type":"bytes","name":"blsPublicKey"},{"type":"bytes","name":"blsPop"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"initialized","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"getWalletAddress","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isAccount","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"getVoteSigner","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"authorizeVoteSigner","inputs":[{"type":"address","name":"signer"},{"type":"uint8","name":"v"},{"type":"bytes32","name":"r"},{"type":"bytes32","name":"s"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isAuthorizedSigner","inputs":[{"type":"address","name":"signer"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"getValidatorSigner","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"getName","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"hasAuthorizedVoteSigner","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"getAttestationSigner","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"validatorSignerToAccount","inputs":[{"type":"address","name":"signer"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"voteSignerToAccount","inputs":[{"type":"address","name":"signer"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setMetadataURL","inputs":[{"type":"string","name":"metadataURL"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"removeAttestationSigner","inputs":[],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"authorizeAttestationSigner","inputs":[{"type":"address","name":"signer"},{"type":"uint8","name":"v"},{"type":"bytes32","name":"r"},{"type":"bytes32","name":"s"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"registry","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"attestationSignerToAccount","inputs":[{"type":"address","name":"signer"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256[]","name":""},{"type":"bytes","name":""}],"name":"batchGetMetadataURL","inputs":[{"type":"address[]","name":"accountsToQuery"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isOwner","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setAccount","inputs":[{"type":"string","name":"name"},{"type":"bytes","name":"dataEncryptionKey"},{"type":"address","name":"walletAddress"},{"type":"uint8","name":"v"},{"type":"bytes32","name":"r"},{"type":"bytes32","name":"s"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"signerToAccount","inputs":[{"type":"address","name":"signer"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setWalletAddress","inputs":[{"type":"address","name":"walletAddress"},{"type":"uint8","name":"v"},{"type":"bytes32","name":"r"},{"type":"bytes32","name":"s"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"bool","name":""}],"name":"createAccount","inputs":[],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"removeValidatorSigner","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"string","name":""}],"name":"getMetadataURL","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setRegistry","inputs":[{"type":"address","name":"registryAddress"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bytes","name":""}],"name":"getDataEncryptionKey","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"authorizedBy","inputs":[{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"authorizeValidatorSigner","inputs":[{"type":"address","name":"signer"},{"type":"uint8","name":"v"},{"type":"bytes32","name":"r"},{"type":"bytes32","name":"s"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"hasAuthorizedAttestationSigner","inputs":[{"type":"address","name":"account"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setName","inputs":[{"type":"string","name":"name"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"initialize","inputs":[{"type":"address","name":"registryAddress"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner"}],"constant":false},{"type":"event","name":"AttestationSignerAuthorized","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"signer","indexed":false}],"anonymous":false},{"type":"event","name":"VoteSignerAuthorized","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"signer","indexed":false}],"anonymous":false},{"type":"event","name":"ValidatorSignerAuthorized","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"signer","indexed":false}],"anonymous":false},{"type":"event","name":"AttestationSignerRemoved","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"oldSigner","indexed":false}],"anonymous":false},{"type":"event","name":"VoteSignerRemoved","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"oldSigner","indexed":false}],"anonymous":false},{"type":"event","name":"ValidatorSignerRemoved","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"oldSigner","indexed":false}],"anonymous":false},{"type":"event","name":"AccountDataEncryptionKeySet","inputs":[{"type":"address","name":"account","indexed":true},{"type":"bytes","name":"dataEncryptionKey","indexed":false}],"anonymous":false},{"type":"event","name":"AccountNameSet","inputs":[{"type":"address","name":"account","indexed":true},{"type":"string","name":"name","indexed":false}],"anonymous":false},{"type":"event","name":"AccountMetadataURLSet","inputs":[{"type":"address","name":"account","indexed":true},{"type":"string","name":"metadataURL","indexed":false}],"anonymous":false},{"type":"event","name":"AccountWalletAddressSet","inputs":[{"type":"address","name":"account","indexed":true},{"type":"address","name":"walletAddress","indexed":false}],"anonymous":false},{"type":"event","name":"AccountCreated","inputs":[{"type":"address","name":"account","indexed":true}],"anonymous":false},{"type":"event","name":"RegistrySet","inputs":[{"type":"address","name":"registryAddress","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false}];

let tokenABI = 
[
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];

let exchangeABI = 
[
{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"initialized","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"minimumReports","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"stable","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"stableBucket","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"exchange","inputs":[{"type":"uint256","name":"sellAmount"},{"type":"uint256","name":"minBuyAmount"},{"type":"bool","name":"sellGold"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setUpdateFrequency","inputs":[{"type":"uint256","name":"newUpdateFrequency"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getSellTokenAmount","inputs":[{"type":"uint256","name":"buyAmount"},{"type":"bool","name":"sellGold"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"value"}],"name":"spread","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"goldBucket","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"updateFrequency","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setReserveFraction","inputs":[{"type":"uint256","name":"newReserveFraction"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"renounceOwnership","inputs":[],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""},{"type":"uint256","name":""}],"name":"getBuyAndSellBuckets","inputs":[{"type":"bool","name":"sellGold"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"registry","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"initialize","inputs":[{"type":"address","name":"registryAddress"},{"type":"address","name":"stableToken"},{"type":"uint256","name":"_spread"},{"type":"uint256","name":"_reserveFraction"},{"type":"uint256","name":"_updateFrequency"},{"type":"uint256","name":"_minimumReports"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"owner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"isOwner","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getBuyTokenAmount","inputs":[{"type":"uint256","name":"sellAmount"},{"type":"bool","name":"sellGold"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setRegistry","inputs":[{"type":"address","name":"registryAddress"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setSpread","inputs":[{"type":"uint256","name":"newSpread"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setMinimumReports","inputs":[{"type":"uint256","name":"newMininumReports"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setStableToken","inputs":[{"type":"address","name":"newStableToken"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"value"}],"name":"reserveFraction","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"lastBucketUpdate","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner"}],"constant":false},{"type":"event","name":"Exchanged","inputs":[{"type":"address","name":"exchanger","indexed":true},{"type":"uint256","name":"sellAmount","indexed":false},{"type":"uint256","name":"buyAmount","indexed":false},{"type":"bool","name":"soldGold","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateFrequencySet","inputs":[{"type":"uint256","name":"updateFrequency","indexed":false}],"anonymous":false},{"type":"event","name":"MinimumReportsSet","inputs":[{"type":"uint256","name":"minimumReports","indexed":false}],"anonymous":false},{"type":"event","name":"StableTokenSet","inputs":[{"type":"address","name":"stable","indexed":true}],"anonymous":false},{"type":"event","name":"SpreadSet","inputs":[{"type":"uint256","name":"spread","indexed":false}],"anonymous":false},{"type":"event","name":"ReserveFractionSet","inputs":[{"type":"uint256","name":"reserveFraction","indexed":false}],"anonymous":false},{"type":"event","name":"BucketsUpdated","inputs":[{"type":"uint256","name":"goldBucket","indexed":false},{"type":"uint256","name":"stableBucket","indexed":false}],"anonymous":false},{"type":"event","name":"RegistrySet","inputs":[{"type":"address","name":"registryAddress","indexed":true}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false}
];




const initialize = async () => {
    // Modern dapp browsers...
		if (window.ethereum) {
				window.web3 = new Web3(ethereum);
				try {
						await ethereum.enable();

						const networkDiv = document.getElementById('network')
						const chainIdDiv = document.getElementById('chainId')
						const accountsDiv = document.getElementById('accounts')
						const balance1Div = document.getElementById('balance1')
						const balance2Div = document.getElementById('balance2')
						const balance3Div = document.getElementById('balance3')
						const exchangeDiv = document.getElementById('exchange')
						const exchange_func = document.getElementById('exchange_func')
						const staking_func = document.getElementById('staking_func')
						const readstaking_func = document.getElementById('readstaking_func')
						const staking_balanceDiv = document.getElementById('staking_balance')

						const chainId = await ethereum.request({
						method: 'eth_chainId',
						})
						chainIdDiv.innerHTML = chainId

						const networkId = await ethereum.request({
						method: 'net_version',
						})
						networkDiv.innerHTML = networkId

						const accounts= await web3.eth.getAccounts();
						console.log(accounts);
						accountsDiv.innerHTML = accounts[0]

						var balance = await web3.eth.getBalance( accounts[0] ); 
						console.log(web3.utils.fromWei(balance, "ether") + " CELO")
						balance1Div.innerHTML = web3.utils.fromWei(balance, "ether") + " CELO"


						var tokenInst1 = new web3.eth.Contract(tokenABI,cusd);
/*
						var ret = await tokenInst1.methods.approve(exchange_proxy,0xFFFFFFFF).send(
						{
							from: accounts[0]
						})
       					console.log(ret);
*/
						var bal = await tokenInst1.methods.balanceOf(accounts[0]).call()
						balance2Div.innerHTML = web3.utils.fromWei(bal, "ether") + "cUSD"
       					console.log(bal);

						var tokenInst2 = new web3.eth.Contract(tokenABI,cgld);
/*
						var ret = await tokenInst2.methods.approve(exchange_proxy,0xFFFFFFFF).send(
						{
							from: accounts[0]
						})
       					console.log(ret);
*/
						var bal1 = await tokenInst2.methods.balanceOf(accounts[0]).call()
						balance3Div.innerHTML = web3.utils.fromWei(bal1, "ether") + "cGLD"
       					console.log(bal1);

						var exchangeInst = new web3.eth.Contract(exchangeABI,exchange_proxy);
						var ret = await exchangeInst.methods.getBuyAndSellBuckets(true).call()
						exchangeDiv.innerHTML = "</br>"+ "cUSD:"+web3.utils.fromWei(ret[0],"ether") + ", cGLD:" + web3.utils.fromWei(ret[1],"ether") 
       					console.log(ret);

						exchange_func.onclick = async () => {
						try {
		/*
								await web3.eth.sendTransaction({ 
									from: accounts[0],
									to: "0x2bB348a915861f1A284fc3CD5587e7b7750F1e8B", 
									value: web3.utils.toWei('1','ether'), 
									gas: 100000, 
									gasPrice: web3.utils.toWei('100','gwei')
									})
		*/
								var exchangeInst = new web3.eth.Contract(exchangeABI,exchange_proxy);
								ret = await exchangeInst.methods.exchange(web3.utils.toWei('0.000000001','ether'), 0, true).send(
								{
									from: accounts[0],
									to: exchange_proxy,
									gas: 400000, 
									gasPrice: web3.utils.toWei('0.1','gwei')
								})
								console.log(ret);
								} catch (err) {
								console.error(err)
								}
						}

						staking_func.onclick = async () => {
								try {
										var accountInst = new web3.eth.Contract(accountABI,account_proxy);

										ret = accountInst.methods.isAccount(accounts[0]).call()
										console.log(ret)
//account create ok
										if (ret == false){
										ret = await accountInst.methods.createAccount().send(
										{
											from: accounts[0],
											to: account_proxy,
											gas: 800000, 
											gasPrice: web3.utils.toWei('0.5','gwei')
										})
										console.log(ret);
										}
								} catch (err) {
										console.error("error")
								}

								try {
										var lockedgoldInst = new web3.eth.Contract(lockedgoldABI,lockedgold_proxy);
//lock ok
										ret = await lockedgoldInst.methods.lock().send(
										{
											from: accounts[0],
											to: lockedgold_proxy,
											gas: 800000, 
											gasPrice: web3.utils.toWei('0.5','gwei'),
											value: web3.utils.toWei('1','ether')
										})
										console.log(ret);
								} catch (err) {
										console.error("error")
								}
								try {
										var electionInst = new web3.eth.Contract(electionABI,election_proxy);
//vote ok
										ret = await electionInst.methods.vote(dsrv_group,web3.utils.toWei('1','ether'),dsrv_lesser,dsrv_greater).send(
										{
											from: accounts[0],
											to: election_proxy,
											gas: 800000, 
											gasPrice: web3.utils.toWei('0.5','gwei')
										})
								} catch (err) {
										console.error(err)
								}
						}
						readstaking_func.onclick = async () => {
								try {
										var electionInst = new web3.eth.Contract(electionABI,election_proxy);
										ret = electionInst.methods.getTotalVotesByAccount(accounts[0]).call()
										ret.then((value) => {
											console.log(value);
											staking_balanceDiv.innerHTML = web3.utils.fromWei(value,'ether') 
										});
								} catch (err) {
										console.error(err)
								}

					   }

        } catch (error) {
                    console.log(error);
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
          console.log(legacy);
        // Acccounts always exposed
  //      web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

window.addEventListener('load', initialize)
