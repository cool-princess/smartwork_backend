<?php

namespace App\Listeners;

use App\Events\UserReferred;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RewardUser
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserReferred  $event
     * @return void
     */
    public function handle(UserReferred $event)
    {
        $referral = \App\User\ReferralLink::find($event->referralId);
        if (!is_null($referral)) {
            \App\User\ReferralRelationship::create(['referral_link_id' => $referral->id, 'user_id' => $event->user->id]);
            // Example...
            if ($referral->program->name === 'Referral Bonus') {
                // User who was sharing link
                $provider = $referral->user;
                $provider->addCredits(250);
                // User who used the link
                $user = $event->user;
                $user->addCredits(250);
            }

        }
    }
}
